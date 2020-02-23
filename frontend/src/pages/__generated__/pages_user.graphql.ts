/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type pages_user = {
    readonly email: string;
    readonly name: string;
    readonly createdAt: unknown | null;
    readonly " $refType": "pages_user";
};
export type pages_user$data = pages_user;
export type pages_user$key = {
    readonly " $data"?: pages_user$data;
    readonly " $fragmentRefs": FragmentRefs<"pages_user">;
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "pages_user",
  "type": "User",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "email",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "name",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "createdAt",
      "args": null,
      "storageKey": null
    }
  ]
};
(node as any).hash = 'f0632726fa5161a82b4bcd0f5d9351e1';
export default node;
