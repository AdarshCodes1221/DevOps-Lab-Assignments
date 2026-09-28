from flask import Flask
import importlib
import os

try:
    psycopg2 = importlib.import_module("psycopg2")
except ImportError:
    try:
        psycopg2 = importlib.import_module("psycopg2_binary")
    except ImportError as exc:
        raise ImportError(
            "psycopg2 is required. Install it with 'pip install psycopg2-binary'"
        ) from exc

app = Flask(__name__)


@app.route("/")
def home():

    conn = psycopg2.connect(
        host=os.environ["DB_HOST"],
        database=os.environ["DB_NAME"],
        user=os.environ["DB_USER"],
        password=os.environ["DB_PASSWORD"]
    )

    cursor = conn.cursor()

    cursor.execute(
        "CREATE TABLE IF NOT EXISTS messages(id SERIAL PRIMARY KEY, text VARCHAR(100));"
    )

    cursor.execute(
        "INSERT INTO messages(text) VALUES('Hello from Flask and PostgreSQL');"
    )

    conn.commit()

    cursor.close()
    conn.close()

    return "Flask Connected Successfully With PostgreSQL"


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)