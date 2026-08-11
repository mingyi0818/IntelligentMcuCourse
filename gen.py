#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Generate real exercise questions for ch5-ch44 and splice into exercises-data.js."""

import json
import io

FILE_PATH = r'd:\IntelligentMcuCourse\assets\js\exercises-data.js'
OUT_PATH = FILE_PATH  # overwrite in place

questions = []
_id = [199]

def s(ch, q, opts, ans, exp):
    _id[0] += 1
    questions.append({"id": _id[0], "ch": ch, "type": "single", "q": q, "options": opts, "answer": ans, "explain": exp})

def m(ch, q, opts, ans, exp):
    _id[0] += 1
    questions.append({"id": _id[0], "ch": ch, "type": "multiple", "q": q, "options": opts, "answer": ans, "explain": exp})

def j(ch, q, ans, exp):
    _id[0] += 1
    questions.append({"id": _id[0], "ch": ch, "type": "judge", "q": q, "answer": ans, "explain": exp})

def t(ch, q, ans, exp):
    _id[0] += 1
    questions.append({"id": _id[0], "ch": ch, "type": "short", "q": q, "answer": ans, "explain": exp})

# Load all question data files in order
for _f in ['ch5_8_data.py', 'ch9_12_data.py', 'ch13_18_data.py', 'ch19_23_data.py',
           'ch24_29_data.py', 'ch30_44_gen.py']:
    _path = r'd:\IntelligentMcuCourse\\' + _f
    try:
        exec(open(_path, encoding='utf-8').read())
    except FileNotFoundError:
        print('Warning: %s not found, skipping' % _f)

# === Splice into exercises-data.js ===
with io.open(FILE_PATH, 'r', encoding='utf-8') as f:
    src = f.read()

# Find insertion point: right before the line with id=200 (the first ch5 placeholder question)
marker_start = src.find('{\n    "id": 200,')
if marker_start < 0:
    raise SystemExit("Could not find id:200 marker")

# Find the closing ]; for EXERCISES_DATA - it ends with id=1079 entry then ];
end_marker = src.find('\n];', marker_start)
if end_marker < 0:
    raise SystemExit("Could not find end ]; marker")
end_marker += len('\n];')

# Build new question JS text
lines = []
for q in questions:
    lines.append('  {')
    lines.append('    "id": %d,' % q['id'])
    lines.append('    "ch": "%s",' % q['ch'])
    lines.append('    "type": "%s",' % q['type'])
    q_text = q['q'].replace('\\', '\\\\').replace('"', '\\"')
    lines.append('    "q": "%s",' % q_text)
    if 'options' in q:
        opts = ', '.join('"%s"' % o.replace('\\', '\\\\').replace('"', '\\"') for o in q['options'])
        lines.append('    "options": [')
        for i, o in enumerate(q['options']):
            o_esc = o.replace('\\', '\\\\').replace('"', '\\"')
            sep = ',' if i < len(q['options'])-1 else ''
            lines.append('      "%s"%s' % (o_esc, sep))
        lines.append('    ],')
    a_text = q.get('explain', '').replace('\\', '\\\\').replace('"', '\\"')
    if isinstance(q['answer'], bool):
        lines.append('    "answer": %s,' % ('true' if q['answer'] else 'false'))
    elif isinstance(q['answer'], list):
        ans_list = ', '.join('"%s"' % a for a in q['answer'])
        lines.append('    "answer": [%s],' % ans_list)
    else:
        ans_t = str(q.get('answer', '')).replace('\\', '\\\\').replace('"', '\\"')
        lines.append('    "answer": "%s",' % ans_t)
    lines.append('    "explain": "%s"' % a_text)
    lines.append('  },')
# Remove trailing comma from last
if lines and lines[-1].endswith('},'):
    lines[-1] = lines[-1][:-1]  # remove comma -> "  }"
new_block = '\n'.join(lines)

new_src = src[:marker_start] + new_block + '\n];\n' + src[end_marker:]

# Recompute TYPE_STATS
type_counts = {'single':0, 'multiple':0, 'judge':0, 'short':0}
for q in questions:
    type_counts[q['type']] += 1
# Also count preserved ch0-ch4 (199 questions): single=90, multiple=36, judge=45, short=28 (verified earlier)
type_counts['single'] += 90
type_counts['multiple'] += 36
type_counts['judge'] += 45
type_counts['short'] += 28

# Replace TYPE_STATS block
import re
new_stats = 'var TYPE_STATS = {\n  "single": %d,\n  "multiple": %d,\n  "judge": %d,\n  "short": %d\n};' % (
    type_counts['single'], type_counts['multiple'], type_counts['judge'], type_counts['short'])
new_src = re.sub(r'var TYPE_STATS = \{[^}]*\};', new_stats.replace('\\', '\\\\'), new_src, count=1)

# Update header comment
total = len(questions) + 199
new_src = re.sub(r'/\* 自动生成的练习题数据\s+共 \d+ 道题',
                 '/* 自动生成的练习题数据\n   共 %d 道题' % total, new_src, count=1)

with io.open(OUT_PATH, 'w', encoding='utf-8') as f:
    f.write(new_src)

print('Done. Total questions: %d (199 preserved + %d new)' % (total, len(questions)))
print('Type distribution:', type_counts)
