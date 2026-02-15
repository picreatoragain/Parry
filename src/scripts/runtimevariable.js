//Runtime Variables
//By Picreatoragain
// "Have the abiltiy to create variables while your project is running "
// These variables do not clear themselves upon green flag.
class RuntimeVariables {
  id = "RuntimeVariables";
 constructor() {
    this.storage = {};
  }
  registerCategory() {
    return {
      name: "Runtime Variables",
    };
  }

registerBlocks() {
  return [
    {
      type: "statement",
      id: "SetTempVar",
      color: "#d77824",
      fields: {
        var: {
          kind: "value", 
          type: "String",
          default: "default"
        },
        setto: {
          kind: "value", 
          type: "String",
          default: "6"
        },
      },
      text: "set [var] to [setto]",
    },

  {
      type: "statement",
      id: "ChangeTempVar",
      color: "#d77824",
      fields: {
        var: {
          kind: "value", 
          type: "String",
          default: "default"
        },
        setto: {
          kind: "value", 
          type: "String",
          default: "7"
        },
      },
      text: "change [var] by [setto]",
    },

     {
      type: "output",
      id: "ViewVar",
      color: "#d77824",
      fields: {
        var: {
          kind: "value", 
          type: "String",
          default: "default"
        },
      },
      text: "view var [var]",
    },

      {
      type: "statement",
      id: "DeleteVar",
      color: "#d77824",
      fields: {
        var: {
          kind: "value", 
          type: "String",
          default: "default"
        },
      },
      text: "delete [var]",
    },

       {
      type: "statement",
      id: "DeleteAll",
      color: "#d77824",
      text: "delete all vars",
    },


        {
      type: "output",
      id: "ListVar",
      color: "#d77824",
      text: "list vars",
    },

  ];
}
registerCode() {
  return {
    SetTempVar: (inputs) => {
      this.storage[inputs.var] = inputs.setto
    },
      ViewVar: (inputs) => {
     return this.storage[inputs.var];
    },
     ChangeTempVar: (inputs) => {
    this.storage[inputs.var] = Number(this.storage[inputs.var]) + Number(inputs.setto)
    },
     DeleteVar: (inputs) => {
      delete this.storage[inputs.var];
    },
      DeleteAll: (inputs) => {
    this.storage = {};
    },
      ListVar: (inputs) => {
     return Object.keys(this.storage);
    },
  };
}
}

registerExtension(RuntimeVariables);
