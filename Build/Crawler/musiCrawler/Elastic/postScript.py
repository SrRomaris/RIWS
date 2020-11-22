import sys
import json
import os.path
from pprint import pprint
from elasticsearch import Elasticsearch
try:
    es = Elasticsearch(
        ['localhost'],
        port=9200
    )
    print ("Connected", es.info())
except Exception as ex:
    print ("Error:", ex)

es.index(index='test_index', id=1, body={
  'artist': 'John Doe',
  'artistImage': 'Learning Elasticsearch',
  'lyrics': 'Using Python with Elasticsearch',
  'relevance': 123,
  'title': 'sdfafa',
})

dirname = os.path.dirname(__file__)
filename = os.path.join(dirname, '../Docs/Songs.json')
MyFile= open(filename,'r').read()
lines = MyFile.splitlines(True)
i=0
json_str=""
docs ={}
current_line = 0
lines_length = len(lines)

for line in lines:
    #line = ''.join(line.split())
    if line.strip() != "}," and current_line!= 0 and current_line!= lines_length-1 :
        current_line=current_line+1
        print("If:", "he")
        json_str = json_str+line
    elif line.strip() == "},":
        current_line=current_line+1
        print("Else:", "he")
        docs[i]=json_str+"}"
        json_str=""
        print("Valor",docs[i])
        es.index(index='songs', id=i, body=docs[i])
        i=i+1
        print(i)
    else:
        current_line=current_line+1
        print("Final", lines_length)