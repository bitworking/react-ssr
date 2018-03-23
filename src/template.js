export default () => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <title>From Server</title>
        <!--<link rel="stylesheet" href="/assets/index.css" />-->
      </head>
      <body>
        <div id="c1"></div>
        
        <div>Anderer HTML Content</div>
        
        <div id="c2"></div>

        <div>StateComponent</div>

        <div id="c3"></div>
        
         <div id="APP_INITIAL_STATE">
          {
            "c1": {"type": "TestComponent", "props": {"text": "Das ist Component 1"}},
            "c2": {"type": "TestComponent", "props": {"text": "Das ist Component 2"}},
            "c3": {"type": "StateComponent", "props": {}}
          }
        </div>
        <script src="/assets/bundle.js"></script>
      </body>
    </html>
  `;
};