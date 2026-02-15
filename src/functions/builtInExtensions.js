export default [
  {
    id: "tween",
    name: "Tween",
    xml: `<category name="Tween" colour="#32a2c0">
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
          <value name="SIZE">
            <shadow type="math_number">
              <field name="NUM">1</field>
            </shadow>
          </value>
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
        <block type="sets_has"></block>
        <block type="sets_add_return"></block>
        <block type="sets_delete_return"></block>
        <block type="sets_convert"></block>
        <block type="sets_merge"></block>
        <sep gap="50"></sep>
        <block type="sets_foreach"></block>
      </category>`,
  },

  // ✅ Runtime Variables category added here
  {
    id: "runtimevars",
    name: "Runtime Variables",
    xml: `<category name="Runtime Variables" colour="#d77824">
      
      <block type="SetTempVar">
        <value name="var">
          <shadow type="text">
            <field name="TEXT">default</field>
          </shadow>
        </value>
        <value name="setto">
          <shadow type="text">
            <field name="TEXT">6</field>
          </shadow>
        </value>
      </block>

      <block type="ChangeTempVar">
        <value name="var">
          <shadow type="text">
            <field name="TEXT">default</field>
          </shadow>
        </value>
        <value name="setto">
          <shadow type="text">
            <field name="TEXT">7</field>
          </shadow>
        </value>
      </block>

      <block type="ViewVar">
        <value name="var">
          <shadow type="text">
            <field name="TEXT">default</field>
          </shadow>
        </value>
      </block>

      <block type="DeleteVar">
        <value name="var">
          <shadow type="text">
            <field name="TEXT">default</field>
          </shadow>
        </value>
      </block>

      <block type="DeleteAll"></block>

      <block type="ListVar"></block>

    </category>`,
  },
];
