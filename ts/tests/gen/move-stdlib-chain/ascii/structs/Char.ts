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
import { PKG_V16 } from "../../constants.js";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64 } from "@mysten/sui/utils";

export function isChar(type: string): boolean {
  type = compressSuiType(type);
  return type === `${PKG_V16}::ascii::Char`;
}

export interface CharFields {
  byte: ToField<"u8">;
}

export type CharReified = Reified<Char, CharFields>;

/**
 * Move struct: `Char`
 * Module: `0000000000000000000000000000000000000000000000000000000000000001::ascii`
 */
export class Char implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V16}::ascii::Char`;
  static readonly $numTypeParams = 0;
  static readonly $isPhantom = [] as const;

  readonly $typeName = Char.$typeName;
  readonly $fullTypeName: `${typeof PKG_V16}::ascii::Char`;
  readonly $typeArgs: [];
  readonly $isPhantom = Char.$isPhantom;

  readonly byte: ToField<"u8">;

  private constructor(typeArgs: [], fields: CharFields) {
    this.$fullTypeName = composeSuiType(
      Char.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V16}::ascii::Char`;
    this.$typeArgs = typeArgs;

    this.byte = fields.byte;
  }

  static reified(): CharReified {
    return {
      typeName: Char.$typeName,
      fullTypeName: composeSuiType(Char.$typeName, ...[]) as `${typeof PKG_V16}::ascii::Char`,
      typeArgs: [] as [],
      isPhantom: Char.$isPhantom,
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) => Char.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) => Char.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => Char.fromBcs(data),
      bcs: Char.bcs,
      fromJSONField: (field: any) => Char.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => Char.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) => Char.fromSuiParsedData(content),
      fromSuiObjectData: (content: SuiObjectData) => Char.fromSuiObjectData(content),
      fetch: async (client: SuiClient, id: string) => Char.fetch(client, id),
      new: (fields: CharFields) => {
        return new Char([], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return Char.reified();
  }

  static phantom(): PhantomReified<ToTypeStr<Char>> {
    return phantom(Char.reified());
  }
  static get p() {
    return Char.phantom();
  }

  static get bcs() {
    return bcs.struct("Char", {
      byte: bcs.u8(),
    });
  }

  static fromFields(fields: Record<string, any>): Char {
    return Char.reified().new({ byte: decodeFromFields("u8", fields.byte) });
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): Char {
    if (!isChar(item.type)) {
      throw new Error("not a Char type");
    }

    return Char.reified().new({ byte: decodeFromFieldsWithTypes("u8", item.fields.byte) });
  }

  static fromBcs(data: Uint8Array): Char {
    return Char.fromFields(Char.bcs.parse(data));
  }

  toJSONField() {
    return {
      byte: this.byte,
    };
  }

  toJSON() {
    return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
  }

  static fromJSONField(field: any): Char {
    return Char.reified().new({ byte: decodeFromJSONField("u8", field.byte) });
  }

  static fromJSON(json: Record<string, any>): Char {
    if (json.$typeName !== Char.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }

    return Char.fromJSONField(json);
  }

  static fromSuiParsedData(content: SuiParsedData): Char {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isChar(content.type)) {
      throw new Error(`object at ${(content.fields as any).id} is not a Char object`);
    }
    return Char.fromFieldsWithTypes(content);
  }

  static fromSuiObjectData(data: SuiObjectData): Char {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isChar(data.bcs.type)) {
        throw new Error(`object at ${data.objectId} is not a Char object`);
      }

      return Char.fromBcs(fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return Char.fromSuiParsedData(data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch(client: SuiClient, id: string): Promise<Char> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(`error fetching Char object at id ${id}: ${res.error.code}`);
    }
    if (res.data?.bcs?.dataType !== "moveObject" || !isChar(res.data.bcs.type)) {
      throw new Error(`object at id ${id} is not a Char object`);
    }

    return Char.fromSuiObjectData(res.data);
  }
}
