function process(transmission) {
    if (transmission.indexOf("::") < 0) {
        //data is invalid
        return -1;
    }
    let parts = transmission.split("::");
    return {
        id: Number(parts[0])
    };
  }
  
  module.exports = process;