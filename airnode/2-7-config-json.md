# `config.json`

`config.json` is the configuration file used for deploying Airnode.
It is composed of three main sections:

1. A list of [OIS](/airnode/2-6-ois.md)
2. An object of lists of triggers, each mapping to an endpoint defined in an OIS in 1
3. An object containing node configuration parameters
4. A UUID named `id` that specifies a specific deployment

Contents of a `config.json` file:
```
{
  "ois": [
    ...
  ],
  "triggers": {
    ...
  },
  "nodeSettings": {
    ...
  },
  "id": "..."
}
```

## `ois`

`ois` is a list of OIS as described in [OIS](/airnode/2-6-ois.md).
Since each OIS defines the integration of a single API to an oracle, this means that a node can serve multiple APIs.
However, this does not mean that nodes can be shared between multiple providers.
Each node serves the APIs of a single provider.

## `triggers`

`triggers` are events that trigger an API call and an Ethereum transaction by Airnode.
Triggers of different types are kept in lists under their respective keys:

- `request`: When the node sees an event with its `providerId` and this trigger's `endpointId` emitted from the central ChainAPI contract, it responds to it with the respective endpoint defined in the OIS. 
  - `endpointId`
  - `oisTitle`
  - `endpointName`

^ These are subject to change (will probably get additional fields).
For now, we can focus on `request` and omit the rest.

```
{
  "request": [
    {
      "endpointId": "...",
      "oisTitle": "...",
      "endpointName": "..."
    },
    ...
  ],
  ...
}
```

## `nodeSettings`

An object containing the following configuration parameters:

- `platformUrl`: The platform (read: ChainAPI) API URL for the node to periodically call to deliver information such as:
  - The `id` of `config.json`
  - The base URL of the node API the platform can call to make test calls and read logs from CloudWatch
  - ...

^ This allows the platform to tell if the user has deployed their node, have used the correct `config.json` file and if/when they take down their node.
- `platformKey`: The API key the node will use to access the platform API
- `nodeKey`: The API key the platform will use to access the node API
- `providerId`: The `bytes32` provider ID assigned to the provider by the Airnode contract
- `ethereumProviders`: A list of Ethereum providers, each with the following structure:
```
{
  "chainId": 1,
  "name": "my-infura-mainnet",
  "url": "https://..."
}
```

An example `nodeSettings` object:

```
{
  "platformUrl": "...",
  "platformKey": "...",
  "nodeKey": "...",
  "providerId": "...",
  "ethereumProviders": [..., ...]
}
```

## `id`

A UUID defined by the platform for the specific `config.json` file and its corresponding `security.json` file.
Once deployed, the node periodically calls `platformUrl` to send this `id`.

## Potential update to `nodeSettings`:

```
chains: [
  {
    type: "evm",
    id: 1,
    minConfirmations: 6,
    providers: [
      {
        "name": infura",
        "url": "https://..."
      }
    ]
  }
]
```

[Home](/README.md#contents)