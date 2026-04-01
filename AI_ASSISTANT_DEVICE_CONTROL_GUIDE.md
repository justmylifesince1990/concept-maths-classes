# Build Your Own AI Assistant for Device Control (VS Code + API Key)

This guide gives you a **safe, working starter architecture** to build a personal AI assistant that can control your connected devices.

## 1) What you should build first

Keep V1 simple:
- A local Node.js server (`assistant-hub`) that receives commands.
- A small set of device connectors (lights, plugs, thermostat, etc.).
- A policy layer that blocks unsafe or unknown actions.
- An LLM layer that translates user text to structured commands.

> Do **not** let the model run raw shell commands or arbitrary code.

---

## 2) Project structure (in VS Code)

```text
assistant-hub/
  src/
    index.js
    routes/command.js
    llm/parseIntent.js
    devices/
      registry.js
      mockLight.js
    policies/
      guardrails.js
  .env
  package.json
```

---

## 3) Minimal setup steps

1. Install Node.js LTS.
2. Create project:
   - `mkdir assistant-hub && cd assistant-hub`
   - `npm init -y`
3. Install dependencies:
   - `npm i express dotenv zod`
4. Create `.env`:
   - `OPENAI_API_KEY=your_testing_key_here`
   - `ALLOW_DEVICE_WRITE=true`
5. Open in VS Code and create files from the structure above.

---

## 4) Core idea: model returns JSON actions, not direct execution

Use this action format:

```json
{
  "device": "living_room_light",
  "action": "set_power",
  "params": { "state": "on" }
}
```

Then validate the JSON and execute only if:
- device exists in your registry,
- action is allow-listed,
- params pass schema validation.

---

## 5) Starter code sketch

### `src/devices/mockLight.js`

```js
export const mockLight = {
  id: "living_room_light",
  actions: {
    async set_power({ state }) {
      if (!["on", "off"].includes(state)) throw new Error("Invalid state");
      return { ok: true, device: "living_room_light", state };
    }
  }
};
```

### `src/devices/registry.js`

```js
import { mockLight } from "./mockLight.js";

export const registry = {
  [mockLight.id]: mockLight
};
```

### `src/policies/guardrails.js`

```js
const ALLOWED_ACTIONS = {
  living_room_light: ["set_power"]
};

export function assertAllowed({ device, action }) {
  if (!ALLOWED_ACTIONS[device]?.includes(action)) {
    throw new Error("Action not allowed by policy");
  }
}
```

### `src/routes/command.js` (concept)

```js
import { z } from "zod";
import { registry } from "../devices/registry.js";
import { assertAllowed } from "../policies/guardrails.js";

const commandSchema = z.object({
  device: z.string(),
  action: z.string(),
  params: z.record(z.any())
});

export async function runCommand(command) {
  const parsed = commandSchema.parse(command);
  assertAllowed(parsed);

  const device = registry[parsed.device];
  if (!device) throw new Error("Unknown device");

  const fn = device.actions[parsed.action];
  if (!fn) throw new Error("Unsupported action");

  return await fn(parsed.params || {});
}
```

---

## 6) Security checklist (important)

- Keep API keys in `.env` only (never hard-code).
- Rotate testing keys regularly.
- Add confirmation prompts for risky actions (door unlock, purchases, alarms).
- Log every command with timestamp and result.
- Add per-device rate limits and cooldowns.
- Start with mock devices before controlling real hardware.

---

## 7) Real device integration options

For each vendor/API, write a connector with this shape:

```js
{
  id: "device_id",
  actions: {
    action_name: async (params) => { /* vendor API call */ }
  }
}
```

Common routes:
- Home Assistant REST/WebSocket API
- MQTT broker for IoT devices
- Vendor cloud APIs (TP-Link, Philips Hue, etc.)

---

## 8) Quick roadmap

- **V1:** single device, single command (`on/off`).
- **V2:** natural language to command JSON with schema validation.
- **V3:** multi-device scenes ("good night mode").
- **V4:** voice input + local wake word.

---

## 9) If you want this fully built next

A good next step is to implement:
1. `POST /assistant/command` endpoint,
2. intent parser that outputs strict JSON,
3. one real connector (or Home Assistant),
4. command logs and safety confirmation flow.

