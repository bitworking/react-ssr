# react-ssr

This is a test how to server-side render multiple React Components independently without a single root element.

The server script takes a html string in the form of:

    <div id="c1"></div>
    
    <div>Anderer HTML Content</div>
    
    <div id="c2"></div>
    
    <div>StateComponent</div>
    
    <div id="c3"></div>
    
    <script id="app-initial-state" type="application/json">
    {
    "c1": {"type": "TestComponent", "props": {"text": "Das ist Component 1"}},
    "c2": {"type": "TestComponent", "props": {"text": "Das ist Component 2"}},
    "c3": {"type": "StateComponent", "props": {}}
    }
    </script>
    
And renders the React components into the tags:

    <div id="c1"><div data-reactroot=""><h1>Das ist Component 1</h1></div></div>
    
    <div>Anderer HTML Content</div>
    
    <div id="c2"><div data-reactroot=""><h1>Das ist Component 2</h1></div></div>
    
    <div>StateComponent</div>
    
    <div id="c3"><button data-reactroot="">ON</button></div>
    
    <script id="app-initial-state" type="application/json">
    {
    "c1": {"type": "TestComponent", "props": {"text": "Das ist Component 1"}},
    "c2": {"type": "TestComponent", "props": {"text": "Das ist Component 2"}},
    "c3": {"type": "StateComponent", "props": {}}
    }
    </script>
    
On the client side it hydrates the components, so that stateful components will work.

### Commands:
```
npm run build
npm run start
```
 
