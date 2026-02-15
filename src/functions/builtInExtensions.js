export default [
  {
    id: "tween",
    name: "Tween",
    xml: `<category name="Tween" colour="#32a2c0">
        <block type="tween_sprite_property">
          <value name="TO">
            <shadow type="math_number">
              <field name="NUM">100</field>
            </shadow>
          </value>
          <value name="DURATION">
            <shadow type="math_number">
              <field name="NUM">3</field>
            </shadow>
          </value>
        </block>
        <block type="tween_block">
          <value name="FROM">
            <shadow type="math_number">
              <field name="NUM">0</field>
            </shadow>
          </value>
          <value name="TO">
            <shadow type="math_number">
              <field name="NUM">100</field>
            </shadow>
          </value>
          <value name="DURATION">
            <shadow type="math_number">
              <field name="NUM">3</field>
            </shadow>
          </value>
        </block>
        <block type="tween_block_value"></block>
      </category>`,
  },
  {
    id: "Runtime",
    name: "Runtime Extensions",
    xml: `<category name="Runtime" colour="#32a2c0">
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
      </category>`,
  },
  {
    id: "pen",
    name: "Pen",
    xml: `<category name="Pen" colour="#0fbd8c">
        <block type="pen_down"></block>
        <block type="pen_up"></block>
        <block type="set_pen_color_combined">
          <value name="VALUE">
            <shadow type="text">
              <field name="TEXT">255,100,100</field>
            </shadow>
          </value>
        </block>
        <block type="set_pen_size">
          <value name="SIZE"><shadow type="math_number"><field name="NUM">1</field></shadow></value>
        </block>
        <block type="clear_pen"></block>
      </category>`,
  },
  {
    id: "sets",
    name: "Sets",
    xml: `<category name="Sets" colour="#2cc2a9">
        <block type="sets_create_with">
          <mutation items="2"></mutation>
        </block>
        <sep gap="50"></sep>
        <block type="sets_size"></block>
        <block type="sets_isEmpty"></block>
        <block type="sets_has">
          <value name="VALUE">
            <shadow type="text">
                <field name="TEXT"></field>
            </shadow>
          </value>
        </block>
        <block type="sets_add_return">
          <value name="VALUE">
            <shadow type="text">
                <field name="TEXT"></field>
            </shadow>
          </value>
        </block>
        <block type="sets_delete_return">
          <value name="VALUE">
            <shadow type="text">
                <field name="TEXT"></field>
            </shadow>
          </value>
        </block>
        <block type="sets_convert"></block>
        <block type="sets_merge"></block>
        <sep gap="50"></sep>
        <block type="sets_foreach">
          <value name="ITEM">
            <shadow type="sets_foreach_item"></shadow>
          </value>
        </block>
      </category>`,
  },
];
