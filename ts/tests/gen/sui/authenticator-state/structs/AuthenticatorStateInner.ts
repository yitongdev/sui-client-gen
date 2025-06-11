import * as reified from "../../../_framework/reified.js";
import {
  PhantomReified,
  Reified,
  StructClass,
  ToField,
  ToTypeStr,
  decodeFromFields,
  decodeFromFieldsWithTypes,
  decodeFromJSONField,
  fieldToJSON,
  phantom,
} from "../../../_framework/reified.js";
import {
  FieldsWithTypes,
  composeSuiType,
  compressSuiType,
} from "../../../_framework/util.js";
import { Vector } from "../../../_framework/vector.js";
import { PKG_V31 } from "../../constants.js";
import { ActiveJwk as ActiveJwk1 } from "./ActiveJwk.js";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64 } from "@mysten/sui/utils";

export function isAuthenticatorStateInner(type: string): boolean {
  type = compressSuiType(type);
  return type === `${PKG_V31}::authenticator_state::AuthenticatorStateInner`;
}

export interface AuthenticatorStateInnerFields {
  version: ToField<"u64">;
  activeJwks: ToField<Vector<ActiveJwk1>>;
}

export type AuthenticatorStateInnerReified = Reified<
  AuthenticatorStateInner,
  AuthenticatorStateInnerFields
>;

/**
 * Move struct: `AuthenticatorStateInner`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::authenticator_state`
 */
export class AuthenticatorStateInner implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V31}::authenticator_state::AuthenticatorStateInner`;
  static readonly $numTypeParams = 0;
  static readonly $isPhantom = [] as const;

  readonly $typeName = AuthenticatorStateInner.$typeName;
  readonly $fullTypeName: `${typeof PKG_V31}::authenticator_state::AuthenticatorStateInner`;
  readonly $typeArgs: [];
  readonly $isPhantom = AuthenticatorStateInner.$isPhantom;

  readonly version: ToField<"u64">;
  readonly activeJwks: ToField<Vector<ActiveJwk1>>;

  private constructor(typeArgs: [], fields: AuthenticatorStateInnerFields) {
    this.$fullTypeName = composeSuiType(
      AuthenticatorStateInner.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V31}::authenticator_state::AuthenticatorStateInner`;
    this.$typeArgs = typeArgs;

    this.version = fields.version;
    this.activeJwks = fields.activeJwks;
  }

  static reified(): AuthenticatorStateInnerReified {
    return {
      typeName: AuthenticatorStateInner.$typeName,
      fullTypeName: composeSuiType(
        AuthenticatorStateInner.$typeName,
        ...[],
      ) as `${typeof PKG_V31}::authenticator_state::AuthenticatorStateInner`,
      typeArgs: [] as [],
      isPhantom: AuthenticatorStateInner.$isPhantom,
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) =>
        AuthenticatorStateInner.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        AuthenticatorStateInner.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => AuthenticatorStateInner.fromBcs(data),
      bcs: AuthenticatorStateInner.bcs,
      fromJSONField: (field: any) =>
        AuthenticatorStateInner.fromJSONField(field),
      fromJSON: (json: Record<string, any>) =>
        AuthenticatorStateInner.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) =>
        AuthenticatorStateInner.fromSuiParsedData(content),
      fromSuiObjectData: (content: SuiObjectData) =>
        AuthenticatorStateInner.fromSuiObjectData(content),
      fetch: async (client: SuiClient, id: string) =>
        AuthenticatorStateInner.fetch(client, id),
      new: (fields: AuthenticatorStateInnerFields) => {
        return new AuthenticatorStateInner([], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return AuthenticatorStateInner.reified();
  }

  static phantom(): PhantomReified<ToTypeStr<AuthenticatorStateInner>> {
    return phantom(AuthenticatorStateInner.reified());
  }
  static get p() {
    return AuthenticatorStateInner.phantom();
  }

  static get bcs() {
    return bcs.struct("AuthenticatorStateInner", {
      version: bcs.u64(),
      active_jwks: bcs.vector(ActiveJwk1.bcs),
    });
  }

  static fromFields(fields: Record<string, any>): AuthenticatorStateInner {
    return AuthenticatorStateInner.reified().new({
      version: decodeFromFields("u64", fields.version),
      activeJwks: decodeFromFields(
        reified.vector(ActiveJwk1.reified()),
        fields.active_jwks,
      ),
    });
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): AuthenticatorStateInner {
    if (!isAuthenticatorStateInner(item.type)) {
      throw new Error("not a AuthenticatorStateInner type");
    }

    return AuthenticatorStateInner.reified().new({
      version: decodeFromFieldsWithTypes("u64", item.fields.version),
      activeJwks: decodeFromFieldsWithTypes(
        reified.vector(ActiveJwk1.reified()),
        item.fields.active_jwks,
      ),
    });
  }

  static fromBcs(data: Uint8Array): AuthenticatorStateInner {
    return AuthenticatorStateInner.fromFields(
      AuthenticatorStateInner.bcs.parse(data),
    );
  }

  toJSONField() {
    return {
      version: this.version.toString(),
      activeJwks: fieldToJSON<Vector<ActiveJwk1>>(
        `vector<${ActiveJwk1.$typeName}>`,
        this.activeJwks,
      ),
    };
  }

  toJSON() {
    return {
      $typeName: this.$typeName,
      $typeArgs: this.$typeArgs,
      ...this.toJSONField(),
    };
  }

  static fromJSONField(field: any): AuthenticatorStateInner {
    return AuthenticatorStateInner.reified().new({
      version: decodeFromJSONField("u64", field.version),
      activeJwks: decodeFromJSONField(
        reified.vector(ActiveJwk1.reified()),
        field.activeJwks,
      ),
    });
  }

  static fromJSON(json: Record<string, any>): AuthenticatorStateInner {
    if (json.$typeName !== AuthenticatorStateInner.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }

    return AuthenticatorStateInner.fromJSONField(json);
  }

  static fromSuiParsedData(content: SuiParsedData): AuthenticatorStateInner {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isAuthenticatorStateInner(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a AuthenticatorStateInner object`,
      );
    }
    return AuthenticatorStateInner.fromFieldsWithTypes(content);
  }

  static fromSuiObjectData(data: SuiObjectData): AuthenticatorStateInner {
    if (data.bcs) {
      if (
        data.bcs.dataType !== "moveObject" ||
        !isAuthenticatorStateInner(data.bcs.type)
      ) {
        throw new Error(`object at is not a AuthenticatorStateInner object`);
      }

      return AuthenticatorStateInner.fromBcs(fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return AuthenticatorStateInner.fromSuiParsedData(data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch(
    client: SuiClient,
    id: string,
  ): Promise<AuthenticatorStateInner> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(
        `error fetching AuthenticatorStateInner object at id ${id}: ${res.error.code}`,
      );
    }
    if (
      res.data?.bcs?.dataType !== "moveObject" ||
      !isAuthenticatorStateInner(res.data.bcs.type)
    ) {
      throw new Error(
        `object at id ${id} is not a AuthenticatorStateInner object`,
      );
    }

    return AuthenticatorStateInner.fromSuiObjectData(res.data);
  }
}
