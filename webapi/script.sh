# echo 'requesting all notes'
# curl -X GET localhost:3000/notes

echo 'requesting first version'
curl localhost:3000/notes/1

# echo 'requesting with wrong body'
# curl --silent -X POST --data-binary '{"title": "aoba"}' localhost:3000/notes

echo 'creating a note'
curl --silent -X POST --data-binary '{"id":2,"minCoreVersion":"11.0.0","maxCoreVersion":"11.0.0","minSysVersion":"5.0.0","maxSysVersion":"5.100.0","type":"prompt","display":"once","title":"5.0.1 Release Notes","content":"<h1>teste 2</h1>"}' localhost:3000/notes