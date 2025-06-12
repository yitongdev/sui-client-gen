import { String } from "../../../_dependencies/source/0x1/string/structs/index.js";
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
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64 } from "@mysten/sui/utils";

export function isJWK(type: string): boolean {
  type = compressSuiType(type);
  return type === `${PKG_V31}::authenticator_state::JWK`;
}

export interface JWKFields {
  kty: ToField<String>;
  e: ToField<String>;
  n: ToField<String>;
  alg: ToField<String>;
}

export type JWKReified = Reified<JWK, JWKFields>;

/**
 * Move struct: `JWK`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::authenticator_state`
 */
export class JWK implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V31}::authenticator_state::JWK`;
  static readonly $numTypeParams = 0;
  static readonly $isPhantom = [] as const;

  readonly $typeName = JWK.$typeName;
  readonly $fullTypeName: `${typeof PKG_V31}::authenticator_state::JWK`;
  readonly $typeArgs: [];
  readonly $isPhantom = JWK.$isPhantom;

  readonly kty: ToField<String>;
  readonly e: ToField<String>;
  readonly n: ToField<String>;
  readonly alg: ToField<String>;

  private constructor(typeArgs: [], fields: JWKFields) {
    this.$fullTypeName = composeSuiType(
      JWK.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V31}::authenticator_state::JWK`;
    this.$typeArgs = typeArgs;

    this.kty = fields.kty;
    this.e = fields.e;
    this.n = fields.n;
    this.alg = fields.alg;
  }

  static reified(): JWKReified {
    return {
      typeName: JWK.$typeName,
      fullTypeName: composeSuiType(
        JWK.$typeName,
        ...[],
      ) as `${typeof PKG_V31}::authenticator_state::JWK`,
      typeArgs: [] as [],
      isPhantom: JWK.$isPhantom,
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) => JWK.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) => JWK.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => JWK.fromBcs(data),
      bcs: JWK.bcs,
      fromJSONField: (field: any) => JWK.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => JWK.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) => JWK.fromSuiParsedData(content),
      fromSuiObjectData: (content: SuiObjectData) => JWK.fromSuiObjectData(content),
      fetch: async (client: SuiClient, id: string) => JWK.fetch(client, id),
      new: (fields: JWKFields) => {
        return new JWK([], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return JWK.reified();
  }

  static phantom(): PhantomReified<ToTypeStr<JWK>> {
    return phantom(JWK.reified());
  }
  static get p() {
    return JWK.phantom();
  }

  static get bcs() {
    return bcs.struct("JWK", {
      kty: String.bcs,
      e: String.bcs,
      n: String.bcs,
      alg: String.bcs,
    });
  }

  static fromFields(fields: Record<string, any>): JWK {
    return JWK.reified().new({
      kty: decodeFromFields(String.reified(), fields.kty),
      e: decodeFromFields(String.reified(), fields.e),
      n: decodeFromFields(String.reified(), fields.n),
      alg: decodeFromFields(String.reified(), fields.alg),
    });
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): JWK {
    if (!isJWK(item.type)) {
      throw new Error("not a JWK type");
    }

    return JWK.reified().new({
      kty: decodeFromFieldsWithTypes(String.reified(), item.fields.kty),
      e: decodeFromFieldsWithTypes(String.reified(), item.fields.e),
      n: decodeFromFieldsWithTypes(String.reified(), item.fields.n),
      alg: decodeFromFieldsWithTypes(String.reified(), item.fields.alg),
    });
  }

  static fromBcs(data: Uint8Array): JWK {
    return JWK.fromFields(JWK.bcs.parse(data));
  }

  toJSONField() {
    return {
      kty: this.kty,
      e: this.e,
      n: this.n,
      alg: this.alg,
    };
  }

  toJSON() {
    return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
  }

  static fromJSONField(field: any): JWK {
    return JWK.reified().new({
      kty: decodeFromJSONField(String.reified(), field.kty),
      e: decodeFromJSONField(String.reified(), field.e),
      n: decodeFromJSONField(String.reified(), field.n),
      alg: decodeFromJSONField(String.reified(), field.alg),
    });
  }

  static fromJSON(json: Record<string, any>): JWK {
    if (json.$typeName !== JWK.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }

    return JWK.fromJSONField(json);
  }

  static fromSuiParsedData(content: SuiParsedData): JWK {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isJWK(content.type)) {
      throw new Error(`object at ${(content.fields as any).id} is not a JWK object`);
    }
    return JWK.fromFieldsWithTypes(content);
  }

  static fromSuiObjectData(data: SuiObjectData): JWK {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isJWK(data.bcs.type)) {
        throw new Error(`object at ${data.objectId} is not a JWK object`);
      }

      return JWK.fromBcs(fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return JWK.fromSuiParsedData(data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch(client: SuiClient, id: string): Promise<JWK> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(`error fetching JWK object at id ${id}: ${res.error.code}`);
    }
    if (res.data?.bcs?.dataType !== "moveObject" || !isJWK(res.data.bcs.type)) {
      throw new Error(`object at id ${id} is not a JWK object`);
    }

    return JWK.fromSuiObjectData(res.data);
  }
}
