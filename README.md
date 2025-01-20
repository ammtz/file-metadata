# File Metadata Microservice

This microservice analyzes metadata of uploaded files without storing them. It extracts details like file name, type, and size and returns them as JSON.

## Features
- Upload a file via a form.
- Get metadata (name, type, size) in the JSON response.
- Files are processed in memory and not saved to disk.

## Setup

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file with the following:
   ```env
   PORT=3000
   ```
4. Start the server:
   ```bash
   npm start
   ```

## API Endpoints

### 1. **`GET /`**
- Serves the `index.html` file with the upload form.

### 2. **`POST /api/fileanalyse`**
- **Description**: Accepts a file from the form and returns its metadata.
- **Input**: A file uploaded through the `upfile` field.
- **Output**: JSON object containing:
  ```json
  {
    "name": "example.txt",
    "type": "text/plain",
    "size": 12345
  }
  ```

## Usage

1. Access the application at `http://localhost:3000`.
2. Use the form to upload a file.
3. Receive the metadata in JSON format.

## Built With
- **Node.js**: Backend runtime.
- **Express**: Server framework.
- **Multer**: Middleware for handling `multipart/form-data`.

## Example Response
```json
{
  "name": "example.txt",
  "type": "text/plain",
  "size": 12345
}
```

## License
This project is licensed under the MIT License.

