var http = require("stream-http");


module.exports = {
  resolve: {
    fallback: { 
      "http": require.resolve("stream-http") 
    }
    
  }
}