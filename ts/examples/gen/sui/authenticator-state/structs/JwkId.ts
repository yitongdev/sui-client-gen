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
import {
  FieldsWithTypes,
  composeSuiType,
  compressSuiType,
} from "../../../_framework/util.js";
import { PKG_V31 } from "../../constants.js";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64 } from "@mysten/sui/utils";

export function isJwkId(type: string): boolean {
  type = compressSuiType(type);
  return type === `${PKG_V31}::authenticator_state::JwkId`;
}

export interface JwkIdFields {
  iss: ToField<String>;
  kid: ToField<String>;
}

export type JwkIdReified = Reified<JwkId, JwkIdFields>;

/**
 * Move struct: `JwkId`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::authenticator_state`
 */
export class JwkId implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V31}::authenticator_state::JwkId`;
  static readonly $numTypeParams = 0;
  static readonly $isPhantom = [] as const;

  readonly $typeName = JwkId.$typeName;
  readonly $fullTypeName: `${typeof PKG_V31}::authenticator_state::JwkId`;
  readonly $typeArgs: [];
  readonly $isPhantom = JwkId.$isPhantom;

  readonly iss: ToField<String>;
  readonly kid: ToField<String>;

  private constructor(typeArgs: [], fields: JwkIdFields) {
    this.$fullTypeName = composeSuiType(
      JwkId.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V31}::authenticator_state::JwkId`;
    this.$typeArgs = typeArgs;

    this.iss = fields.iss;
    this.kid = fields.kid;
  }

  static reified(): JwkIdReified {
    return {
      typeName: JwkId.$typeName,
      fullTypeName: composeSuiType(
        JwkId.$typeName,
        ...[],
      ) as `${typeof PKG_V31}::authenticator_state::JwkId`,
      typeArgs: [] as [],
      isPhantom: JwkId.$isPhantom,
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) => JwkId.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        JwkId.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => JwkId.fromBcs(data),
      bcs: JwkId.bcs,
      fromJSONField: (field: any) => JwkId.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => JwkId.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) =>
        JwkId.fromSuiParsedData(content),
      fromSuiObjectData: (content: SuiObjectData) =>
        JwkId.fromSuiObjectData(content),
      fetch: async (client: SuiClient, id: string) => JwkId.fetch(client, id),
      new: (fields: JwkIdFields) => {
        return new JwkId([], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return JwkId.reified();
  }

  static phantom(): PhantomReified<ToTypeStr<JwkId>> {
    return phantom(JwkId.reified());
  }
  static get p() {
    return JwkId.phantom();
  }

  static get bcs() {
    return bcs.struct("JwkId", {
      iss: String.bcs,
      kid: String.bcs,
    });
  }

  static fromFields(fields: Record<string, any>): JwkId {
    return JwkId.reified().new({
      iss: decodeFromFields(String.reified(), fields.iss),
      kid: decodeFromFields(String.reified(), fields.kid),
    });
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): JwkId {
    if (!isJwkId(item.type)) {
      throw new Error("not a JwkId type");
    }

    return JwkId.reified().new({
      iss: decodeFromFieldsWithTypes(String.reified(), item.fields.iss),
      kid: decodeFromFieldsWithTypes(String.reified(), item.fields.kid),
    });
  }

  static fromBcs(data: Uint8Array): JwkId {
    return JwkId.fromFields(JwkId.bcs.parse(data));
  }

  toJSONField() {
    return {
      iss: this.iss,
      kid: this.kid,
    };
  }

  toJSON() {
    return {
      $typeName: this.$typeName,
      $typeArgs: this.$typeArgs,
      ...this.toJSONField(),
    };
  }

  static fromJSONField(field: any): JwkId {
    return JwkId.reified().new({
      iss: decodeFromJSONField(String.reified(), field.iss),
      kid: decodeFromJSONField(String.reified(), field.kid),
    });
  }

  static fromJSON(json: Record<string, any>): JwkId {
    if (json.$typeName !== JwkId.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }

    return JwkId.fromJSONField(json);
  }

  static fromSuiParsedData(content: SuiParsedData): JwkId {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isJwkId(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a JwkId object`,
      );
    }
    return JwkId.fromFieldsWithTypes(content);
  }

  static fromSuiObjectData(data: SuiObjectData): JwkId {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isJwkId(data.bcs.type)) {
        throw new Error(`object at is not a JwkId object`);
      }

      return JwkId.fromBcs(fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return JwkId.fromSuiParsedData(data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch(client: SuiClient, id: string): Promise<JwkId> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(
        `error fetching JwkId object at id ${id}: ${res.error.code}`,
      );
    }
    if (
      res.data?.bcs?.dataType !== "moveObject" ||
      !isJwkId(res.data.bcs.type)
    ) {
      throw new Error(`object at id ${id} is not a JwkId object`);
    }

    return JwkId.fromSuiObjectData(res.data);
  }
}
