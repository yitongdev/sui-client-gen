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
} from "../../../../../_framework/reified.js";
import {
  FieldsWithTypes,
  composeSuiType,
  compressSuiType,
} from "../../../../../_framework/util.js";
import { PKG_V35 } from "../../constants.js";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64, fromHex, toHex } from "@mysten/sui/utils";

export function isID(type: string): boolean {
  type = compressSuiType(type);
  return type === `${PKG_V35}::object::ID`;
}

export interface IDFields {
  bytes: ToField<"address">;
}

export type IDReified = Reified<ID, IDFields>;

/**
 * Move struct: `ID`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::object`
 */
export class ID implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V35}::object::ID`;
  static readonly $numTypeParams = 0;
  static readonly $isPhantom = [] as const;

  readonly $typeName = ID.$typeName;
  readonly $fullTypeName: `${typeof PKG_V35}::object::ID`;
  readonly $typeArgs: [];
  readonly $isPhantom = ID.$isPhantom;

  readonly bytes: ToField<"address">;

  private constructor(typeArgs: [], fields: IDFields) {
    this.$fullTypeName = composeSuiType(
      ID.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V35}::object::ID`;
    this.$typeArgs = typeArgs;

    this.bytes = fields.bytes;
  }

  static reified(): IDReified {
    return {
      typeName: ID.$typeName,
      fullTypeName: composeSuiType(
        ID.$typeName,
        ...[],
      ) as `${typeof PKG_V35}::object::ID`,
      typeArgs: [] as [],
      isPhantom: ID.$isPhantom,
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) => ID.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        ID.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => ID.fromBcs(data),
      bcs: ID.bcs,
      fromJSONField: (field: any) => ID.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => ID.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) =>
        ID.fromSuiParsedData(content),
      fromSuiObjectData: (content: SuiObjectData) =>
        ID.fromSuiObjectData(content),
      fetch: async (client: SuiClient, id: string) => ID.fetch(client, id),
      new: (fields: IDFields) => {
        return new ID([], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return ID.reified();
  }

  static phantom(): PhantomReified<ToTypeStr<ID>> {
    return phantom(ID.reified());
  }
  static get p() {
    return ID.phantom();
  }

  static get bcs() {
    return bcs.struct("ID", {
      bytes: bcs.bytes(32).transform({
        input: (val: string) => fromHex(val),
        output: (val: Uint8Array) => toHex(val),
      }),
    });
  }

  static fromFields(fields: Record<string, any>): ID {
    return ID.reified().new({
      bytes: decodeFromFields("address", fields.bytes),
    });
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): ID {
    if (!isID(item.type)) {
      throw new Error("not a ID type");
    }

    return ID.reified().new({
      bytes: decodeFromFieldsWithTypes("address", item.fields.bytes),
    });
  }

  static fromBcs(data: Uint8Array): ID {
    return ID.fromFields(ID.bcs.parse(data));
  }

  toJSONField() {
    return {
      bytes: this.bytes,
    };
  }

  toJSON() {
    return {
      $typeName: this.$typeName,
      $typeArgs: this.$typeArgs,
      ...this.toJSONField(),
    };
  }

  static fromJSONField(field: any): ID {
    return ID.reified().new({
      bytes: decodeFromJSONField("address", field.bytes),
    });
  }

  static fromJSON(json: Record<string, any>): ID {
    if (json.$typeName !== ID.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }

    return ID.fromJSONField(json);
  }

  static fromSuiParsedData(content: SuiParsedData): ID {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isID(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a ID object`,
      );
    }
    return ID.fromFieldsWithTypes(content);
  }

  static fromSuiObjectData(data: SuiObjectData): ID {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isID(data.bcs.type)) {
        throw new Error(`object at is not a ID object`);
      }

      return ID.fromBcs(fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return ID.fromSuiParsedData(data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch(client: SuiClient, id: string): Promise<ID> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(
        `error fetching ID object at id ${id}: ${res.error.code}`,
      );
    }
    if (res.data?.bcs?.dataType !== "moveObject" || !isID(res.data.bcs.type)) {
      throw new Error(`object at id ${id} is not a ID object`);
    }

    return ID.fromSuiObjectData(res.data);
  }
}
