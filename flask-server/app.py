from flask import Flask, jsonify, request

app = Flask(__name__)

@app.route('/api/data', methods=['GET'])
def get_data():
    data = {
        "message": "Hello From Flask Server",
    }

    callback = request.args.get('callback')

    if callback:
        response_data = f"{callback}({jsonify(data).data.decode('utf-8')})"
        return app.response_class(response_data, content_type='application/javascript')

    return jsonify(data)

if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True)
