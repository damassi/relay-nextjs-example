/**
 * @generated SignedSource<<ee28b500e54c320bdb2d02ce02c8ca0d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type artistQuery$variables = {};
export type artistQuery$data = {
  readonly artist: {
    readonly internalID: string;
    readonly bio: string | null;
  } | null;
};
export type artistQuery = {
  variables: artistQuery$variables;
  response: artistQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "id",
    "value": "andy-warhol"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "internalID",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "bio",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "artistQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "Artist",
        "kind": "LinkedField",
        "name": "artist",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          (v2/*: any*/)
        ],
        "storageKey": "artist(id:\"andy-warhol\")"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "artistQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "Artist",
        "kind": "LinkedField",
        "name": "artist",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": "artist(id:\"andy-warhol\")"
      }
    ]
  },
  "params": {
    "cacheID": "486208cf81997c31d05cb29cc9fad7fe",
    "id": null,
    "metadata": {},
    "name": "artistQuery",
    "operationKind": "query",
    "text": "query artistQuery {\n  artist(id: \"andy-warhol\") {\n    internalID\n    bio\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "047e5211347d80d1dd5050d4996443f9";

export default node;
