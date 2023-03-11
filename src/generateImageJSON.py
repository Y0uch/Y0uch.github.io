import json

jsonList = []
count = 0
with open('dirlist.txt') as f:
    lines = f.readlines()
    for line in lines:
        line = line.replace('\u0000', '')
        line = line.strip()
        if line == '\n' or line == '':
            continue
        

        output = json.dumps(
            {"name": line, 
             'description': "testDescription", 
             "file_name": line, 
             "show_on_carousel": False, 
             "previous_iterations,": [],
             }, indent = 4
        ) + ","
        print(output)
        jsonList.append(output)
        count += 1
f.close()
    
