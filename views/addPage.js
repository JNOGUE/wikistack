const html = require("html-template-tag");
const layout = require("./layout");

module.exports = () =>
  layout(html`
    <h3>Add a Page</h3>
    <hr />
    <form action="/wiki" method="post">
      <!--Author name-->
      <div><input name="author" type="text" /></div>

      <!--Author email-->
      <div><input name="email" type="text" /></div>

      <div class="form-group">
        <label for="title" class="col-sm-2 control-label">Page Title</label>
        <div class="col-sm-10">
          <input id="title" name="title" type="text" class="form-control" />
        </div>
      </div>
      <!--Author content-->
      <div><textarea name="content"></textarea></div>

      <!--Author status-->
      <div><input name="status" type="text" /></div>

      <div class="col-sm-offset-2 col-sm-10">
        <button type="submit" class="btn btn-primary">submit</button>
      </div>
    </form>
  `);
