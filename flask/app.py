from flask import Flask, render_template, request, jsonify, make_response, send_file, redirect, url_for

app = Flask(__name__, static_folder='../vue/dist/static', template_folder='../vue/dist')

@app.route('/')
def index():
	return render_template('index.html')

import urllib.request, urllib.parse
import json
@app.route('/api/')
def getApi():
    keyword_or = request.args.get('keyword_or')
    ym = request.args.get('ym')
    ymd = request.args.get('ymd')
    owner_nickname = request.args.get('owner_nickname')
    start = request.args.get('start')
    order = request.args.get('order')
    count = request.args.get('count')
    all_params = {
        "keyword_or": keyword_or,
        "ym":ym,
        "ymd":ymd,
        "owner_nickname":owner_nickname,
        "start":start,
        "order":order,
        "count":500
    }

    params = {}
    #値がNoneとなっている要素はパラメータから削除する
    for key in all_params:
        if all_params[key] != None:
            params[key] = all_params[key]


    p = urllib.parse.urlencode(params)
    print(p)
    url = "https://connpass.com/api/v1/event/?" + p

    with urllib.request.urlopen(url) as res:
        html = res.read().decode().replace(r"\n","")
        jsonData = json.loads(html)
        return jsonify(jsonData)

if __name__ == "__main__":
    app.run()