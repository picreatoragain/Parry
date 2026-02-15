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
        onClick: popup => {
            const input = popup.querySelector('[data-row="1"][data-col="1"]');
            const hardcode = "https://raw.githubusercontent.com/picreatoragain/Parry/main/src/scripts/runtimevariable.js"
            const userCode = fetch(hardcode);
            const iframe = document.createElement("iframe");
            iframe.style.display = "none";
            iframe.sandbox = "allow-scripts";
            iframe.srcdoc = `
                <script>
                  "use strict",
                  const registerExtension = (def) => {
                    parent.postMessage({ type: "registerExtension", code: def.toString() }, "*");
                  };
                  window.addEventListener("message", (event) => {
                    if (event.data && event.data.type === "runCode") {
                      try {
                        eval(event.data.code);
                      } catch (err) {
                        parent.postMessage({ type: "error", error: err.message }, "*");
                      }
                    }
                  });
                  parent.postMessage({ type: "iframeReady" }, "*");
                </script>
              `;
            document.body.appendChild(iframe);

            const handleMessage = event => {
              if (!event.data) return;

              switch (event.data.type) {
                case "registerExtension":
                  try {
                    const extensionCode = "(" + event.data.code + ")";
                    const ExtensionClass = eval(extensionCode);
                    registerExtension(ExtensionClass);

                    console.log("extension registered:", ExtensionClass);
                  } catch (error) {
                    console.error("Error in extension:", error);
                    alert("Error in extension: " + error);
                  }

                  iframe.remove();
                  window.removeEventListener("message", handleMessage);
                  break;
                case "error":
                  console.error("Error in extension:", event.data.error);
                  alert("Error in extension: " + event.data.error);
                  window.removeEventListener("message", handleMessage);
                  break;
                case "iframeReady":
                  iframe.contentWindow.postMessage(
                    { type: "runCode", code: userCode },
                    "*",
                  );
                  break;
              }
            };

            window.addEventListener("message", handleMessage);

            popup.remove();
            document.getElementById("extensions-popup")?.classList.add("hidden");
          }`,
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
