module.exports = function simple(req, res) {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write(`
    <!DOCTYPE html>
      <html>
      <head><meta charset=\"utf-8\"/>
      <title>Calculator Web Site</title>
      </head>
      <body>
      <form action="http://localhost:3000/add.js">
      <div>
        Enter two numbers<br /> 
        <input required type="text" name="first" /><br /><br />
        <input required type="text" name="second" /><br /><br />
        <select name="select" id="select">
        <option value="plus">+</option>
        <option value="min">-</option>
        <option value="mul">*</option>
        <option value="dev">/</option>
      </select>
      <br /><br />
        <input type="submit" value="Click" />
      </div>
    </form>
      </body>
      </html>

       `);
  return res.end();
};
