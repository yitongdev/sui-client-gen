import {
  PhantomReified,
  Reified,
  StructClass,
  ToField,
  ToTypeStr,
  decodeFromFields,
  decodeFromFieldsWithTypes,
  decodeFromJSONField,
  phantom,
} from "../../../_framework/reified.js";
import { FieldsWithTypes, composeSuiType, compressSuiType } from "../../../_framework/util.js";
import { PKG_V31 } from "../../constants.js";
import { UID } from "../../object/structs/index.js";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64 } from "@mysten/sui/utils";

export function isAuthenticatorState(type: string): boolean {
  type = compressSuiType(type);
  return type === `${PKG_V31}::authenticator_state::AuthenticatorState`;
}

export interface AuthenticatorStateFields {
  id: ToField<UID>;
  version: ToField<"u64">;
}

export type AuthenticatorStateReified = Reified<AuthenticatorState, AuthenticatorStateFields>;

/**
 * Move struct: `AuthenticatorState`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::authenticator_state`
 */
export class AuthenticatorState implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V31}::authenticator_state::AuthenticatorState`;
  static readonly $numTypeParams = 0;
  static readonly $isPhantom = [] as const;

  readonly $typeName = AuthenticatorState.$typeName;
  readonly $fullTypeName: `${typeof PKG_V31}::authenticator_state::AuthenticatorState`;
  readonly $typeArgs: [];
  readonly $isPhantom = AuthenticatorState.$isPhantom;

  readonly id: ToField<UID>;
  readonly version: ToField<"u64">;

  private constructor(typeArgs: [], fields: AuthenticatorStateFields) {
    this.$fullTypeName = composeSuiType(
      AuthenticatorState.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V31}::authenticator_state::AuthenticatorState`;
    this.$typeArgs = typeArgs;

    this.id = fields.id;
    this.version = fields.version;
  }

  static reified(): AuthenticatorStateReified {
    return {
      typeName: AuthenticatorState.$typeName,
      fullTypeName: composeSuiType(
        AuthenticatorState.$typeName,
        ...[],
      ) as `${typeof PKG_V31}::authenticator_state::AuthenticatorState`,
      typeArgs: [] as [],
      isPhantom: AuthenticatorState.$isPhantom,
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) => AuthenticatorState.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) => AuthenticatorState.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => AuthenticatorState.fromBcs(data),
      bcs: AuthenticatorState.bcs,
      fromJSONField: (field: any) => AuthenticatorState.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => AuthenticatorState.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) => AuthenticatorState.fromSuiParsedData(content),
      fromSuiObjectData: (content: SuiObjectData) => AuthenticatorState.fromSuiObjectData(content),
      fetch: async (client: SuiClient, id: string) => AuthenticatorState.fetch(client, id),
      new: (fields: AuthenticatorStateFields) => {
        return new AuthenticatorState([], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return AuthenticatorState.reified();
  }

  static phantom(): PhantomReified<ToTypeStr<AuthenticatorState>> {
    return phantom(AuthenticatorState.reified());
  }
  static get p() {
    return AuthenticatorState.phantom();
  }

  static get bcs() {
    return bcs.struct("AuthenticatorState", {
      id: UID.bcs,
      version: bcs.u64(),
    });
  }

  static fromFields(fields: Record<string, any>): AuthenticatorState {
    return AuthenticatorState.reified().new({
      id: decodeFromFields(UID.reified(), fields.id),
      version: decodeFromFields("u64", fields.version),
    });
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): AuthenticatorState {
    if (!isAuthenticatorState(item.type)) {
      throw new Error("not a AuthenticatorState type");
    }

    return AuthenticatorState.reified().new({
      id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id),
      version: decodeFromFieldsWithTypes("u64", item.fields.version),
    });
  }

  static fromBcs(data: Uint8Array): AuthenticatorState {
    return AuthenticatorState.fromFields(AuthenticatorState.bcs.parse(data));
  }

  toJSONField() {
    return {
      id: this.id,
      version: this.version.toString(),
    };
  }

  toJSON() {
    return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
  }

  static fromJSONField(field: any): AuthenticatorState {
    return AuthenticatorState.reified().new({
      id: decodeFromJSONField(UID.reified(), field.id),
      version: decodeFromJSONField("u64", field.version),
    });
  }

  static fromJSON(json: Record<string, any>): AuthenticatorState {
    if (json.$typeName !== AuthenticatorState.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }

    return AuthenticatorState.fromJSONField(json);
  }

  static fromSuiParsedData(content: SuiParsedData): AuthenticatorState {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isAuthenticatorState(content.type)) {
      throw new Error(`object at ${(content.fields as any).id} is not a AuthenticatorState object`);
    }
    return AuthenticatorState.fromFieldsWithTypes(content);
  }

  static fromSuiObjectData(data: SuiObjectData): AuthenticatorState {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isAuthenticatorState(data.bcs.type)) {
        throw new Error(`object at ${data.objectId} is not a AuthenticatorState object`);
      }

      return AuthenticatorState.fromBcs(fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return AuthenticatorState.fromSuiParsedData(data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch(client: SuiClient, id: string): Promise<AuthenticatorState> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(`error fetching AuthenticatorState object at id ${id}: ${res.error.code}`);
    }
    if (res.data?.bcs?.dataType !== "moveObject" || !isAuthenticatorState(res.data.bcs.type)) {
      throw new Error(`object at id ${id} is not a AuthenticatorState object`);
    }

    return AuthenticatorState.fromSuiObjectData(res.data);
  }
}
