module.exports = `
  <!DOCTYPE html>
      <html lang="en">
      <head>
      <meta charset="UTF-8">
      <title>Test</title>
      </head>
      <body>
          <div class="container">
              <h1><%- name %> <%- surname %></h1>

              <ul>
              <% for (var i in projects) { %>
                <li><%- projects[i].title %>. Started: <%- projects[i].started %></li>
              <% } %>
              </ul>
          </div>
      </body>
  </html>`;
