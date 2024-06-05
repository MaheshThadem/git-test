// The Calculator
const betaCalc = {
    // ...other calculator code up here
  
    // Register a plugin
    register(plugin) {
      const { name, exec } = plugin;
      this[name] = exec;
    }
  };
  
  // Example plugin: "squared" button
  const squaredPlugin = {
    name: 'squared',
    exec: function() {
      this.setValue(this.currentValue * this.currentValue);
    }
  };
  
  // Register the plugin
  betaCalc.register(squaredPlugin);
  