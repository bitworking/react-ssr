# react-ssr

This is a test how to server-side render multiple React Components independently without a single root element.

The server script takes a html string in the form of:

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
    
It renders the React components into the tags and transforms the state div into a valid script tag:

    <div id="c1"><div data-reactroot=""><h1>Das ist Component 1</h1></div></div>
    <div>Anderer HTML Content</div>
    <div id="c2"><div data-reactroot=""><h1>Das ist Component 2</h1></div></div>
    <div>StateComponent</div>
    <div id="c3"><button data-reactroot="">ON</button></div>
     <script>window.__APP_INITIAL_STATE__ = 
      {
        "c1": {"type": "TestComponent", "props": {"text": "Das ist Component 1"}},
        "c2": {"type": "TestComponent", "props": {"text": "Das ist Component 2"}},
        "c3": {"type": "StateComponent", "props": {}}
      }
    </script>
    
On the client side it hydrates the components, so that statefull components will work.

### Commands:
```
npm run build
npm run start
```
 
