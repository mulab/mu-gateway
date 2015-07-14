# mu-gateway
Configurable route gateway with authentication and authorization 

# Configuration

```config.js
export default {
  "target": "<protocol>://<hostname>:<port>[path]",
  "default": function(method, user) {
    if (method === 'GET') return true;
    return false;
  }
  "rules": {
    "/profile/:name": function(method, user, name) {
      if (method === 'GET') return true;
      else if (method === 'POST') {
        if (user["name"] === name || "admin" in user["group"]) return true;
      }
      return false;
    }
  }
}
```
