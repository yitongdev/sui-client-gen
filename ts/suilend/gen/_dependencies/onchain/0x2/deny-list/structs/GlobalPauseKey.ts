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
import { fromBase64 } from "@mysten/sui/utils";

export function isGlobalPauseKey(type: string): boolean {
  type = compressSuiType(type);
  return type === `${PKG_V35}::deny_list::GlobalPauseKey`;
}

export interface GlobalPauseKeyFields {
  dummyField: ToField<"bool">;
}

export type GlobalPauseKeyReified = Reified<
  GlobalPauseKey,
  GlobalPauseKeyFields
>;

/**
 * Move struct: `GlobalPauseKey`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::deny_list`
 */
export class GlobalPauseKey implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V35}::deny_list::GlobalPauseKey`;
  static readonly $numTypeParams = 0;
  static readonly $isPhantom = [] as const;

  readonly $typeName = GlobalPauseKey.$typeName;
  readonly $fullTypeName: `${typeof PKG_V35}::deny_list::GlobalPauseKey`;
  readonly $typeArgs: [];
  readonly $isPhantom = GlobalPauseKey.$isPhantom;

  readonly dummyField: ToField<"bool">;

  private constructor(typeArgs: [], fields: GlobalPauseKeyFields) {
    this.$fullTypeName = composeSuiType(
      GlobalPauseKey.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V35}::deny_list::GlobalPauseKey`;
    this.$typeArgs = typeArgs;

    this.dummyField = fields.dummyField;
  }

  static reified(): GlobalPauseKeyReified {
    return {
      typeName: GlobalPauseKey.$typeName,
      fullTypeName: composeSuiType(
        GlobalPauseKey.$typeName,
        ...[],
      ) as `${typeof PKG_V35}::deny_list::GlobalPauseKey`,
      typeArgs: [] as [],
      isPhantom: GlobalPauseKey.$isPhantom,
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) =>
        GlobalPauseKey.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        GlobalPauseKey.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => GlobalPauseKey.fromBcs(data),
      bcs: GlobalPauseKey.bcs,
      fromJSONField: (field: any) => GlobalPauseKey.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => GlobalPauseKey.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) =>
        GlobalPauseKey.fromSuiParsedData(content),
      fromSuiObjectData: (content: SuiObjectData) =>
        GlobalPauseKey.fromSuiObjectData(content),
      fetch: async (client: SuiClient, id: string) =>
        GlobalPauseKey.fetch(client, id),
      new: (fields: GlobalPauseKeyFields) => {
        return new GlobalPauseKey([], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return GlobalPauseKey.reified();
  }

  static phantom(): PhantomReified<ToTypeStr<GlobalPauseKey>> {
    return phantom(GlobalPauseKey.reified());
  }
  static get p() {
    return GlobalPauseKey.phantom();
  }

  static get bcs() {
    return bcs.struct("GlobalPauseKey", {
      dummy_field: bcs.bool(),
    });
  }

  static fromFields(fields: Record<string, any>): GlobalPauseKey {
    return GlobalPauseKey.reified().new({
      dummyField: decodeFromFields("bool", fields.dummy_field),
    });
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): GlobalPauseKey {
    if (!isGlobalPauseKey(item.type)) {
      throw new Error("not a GlobalPauseKey type");
    }

    return GlobalPauseKey.reified().new({
      dummyField: decodeFromFieldsWithTypes("bool", item.fields.dummy_field),
    });
  }

  static fromBcs(data: Uint8Array): GlobalPauseKey {
    return GlobalPauseKey.fromFields(GlobalPauseKey.bcs.parse(data));
  }

  toJSONField() {
    return {
      dummyField: this.dummyField,
    };
  }

  toJSON() {
    return {
      $typeName: this.$typeName,
      $typeArgs: this.$typeArgs,
      ...this.toJSONField(),
    };
  }

  static fromJSONField(field: any): GlobalPauseKey {
    return GlobalPauseKey.reified().new({
      dummyField: decodeFromJSONField("bool", field.dummyField),
    });
  }

  static fromJSON(json: Record<string, any>): GlobalPauseKey {
    if (json.$typeName !== GlobalPauseKey.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }

    return GlobalPauseKey.fromJSONField(json);
  }

  static fromSuiParsedData(content: SuiParsedData): GlobalPauseKey {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isGlobalPauseKey(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a GlobalPauseKey object`,
      );
    }
    return GlobalPauseKey.fromFieldsWithTypes(content);
  }

  static fromSuiObjectData(data: SuiObjectData): GlobalPauseKey {
    if (data.bcs) {
      if (
        data.bcs.dataType !== "moveObject" ||
        !isGlobalPauseKey(data.bcs.type)
      ) {
        throw new Error(`object at is not a GlobalPauseKey object`);
      }

      return GlobalPauseKey.fromBcs(fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return GlobalPauseKey.fromSuiParsedData(data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch(client: SuiClient, id: string): Promise<GlobalPauseKey> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(
        `error fetching GlobalPauseKey object at id ${id}: ${res.error.code}`,
      );
    }
    if (
      res.data?.bcs?.dataType !== "moveObject" ||
      !isGlobalPauseKey(res.data.bcs.type)
    ) {
      throw new Error(`object at id ${id} is not a GlobalPauseKey object`);
    }

    return GlobalPauseKey.fromSuiObjectData(res.data);
  }
}
