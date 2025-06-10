import { TypeName } from "../../../_dependencies/source/0x1/type-name/structs/index.js";
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
import { PKG_V1 } from "../../constants.js";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64 } from "@mysten/sui/utils";

export function isPoolRegistryItem(type: string): boolean {
  type = compressSuiType(type);
  return type === `${PKG_V1}::pool::PoolRegistryItem`;
}

export interface PoolRegistryItemFields {
  a: ToField<TypeName>;
  b: ToField<TypeName>;
}

export type PoolRegistryItemReified = Reified<
  PoolRegistryItem,
  PoolRegistryItemFields
>;

/**
 * Move struct: `PoolRegistryItem`
 * Module: `f917eb03d02b9221b10276064b2c10296276cb43feb24aac35113a272dd691c7::pool`
 */
export class PoolRegistryItem implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V1}::pool::PoolRegistryItem`;
  static readonly $numTypeParams = 0;
  static readonly $isPhantom = [] as const;

  readonly $typeName = PoolRegistryItem.$typeName;
  readonly $fullTypeName: `${typeof PKG_V1}::pool::PoolRegistryItem`;
  readonly $typeArgs: [];
  readonly $isPhantom = PoolRegistryItem.$isPhantom;

  readonly a: ToField<TypeName>;
  readonly b: ToField<TypeName>;

  private constructor(typeArgs: [], fields: PoolRegistryItemFields) {
    this.$fullTypeName = composeSuiType(
      PoolRegistryItem.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V1}::pool::PoolRegistryItem`;
    this.$typeArgs = typeArgs;

    this.a = fields.a;
    this.b = fields.b;
  }

  static reified(): PoolRegistryItemReified {
    return {
      typeName: PoolRegistryItem.$typeName,
      fullTypeName: composeSuiType(
        PoolRegistryItem.$typeName,
        ...[],
      ) as `${typeof PKG_V1}::pool::PoolRegistryItem`,
      typeArgs: [] as [],
      isPhantom: PoolRegistryItem.$isPhantom,
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) =>
        PoolRegistryItem.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        PoolRegistryItem.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => PoolRegistryItem.fromBcs(data),
      bcs: PoolRegistryItem.bcs,
      fromJSONField: (field: any) => PoolRegistryItem.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => PoolRegistryItem.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) =>
        PoolRegistryItem.fromSuiParsedData(content),
      fromSuiObjectData: (content: SuiObjectData) =>
        PoolRegistryItem.fromSuiObjectData(content),
      fetch: async (client: SuiClient, id: string) =>
        PoolRegistryItem.fetch(client, id),
      new: (fields: PoolRegistryItemFields) => {
        return new PoolRegistryItem([], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return PoolRegistryItem.reified();
  }

  static phantom(): PhantomReified<ToTypeStr<PoolRegistryItem>> {
    return phantom(PoolRegistryItem.reified());
  }
  static get p() {
    return PoolRegistryItem.phantom();
  }

  static get bcs() {
    return bcs.struct("PoolRegistryItem", {
      a: TypeName.bcs,
      b: TypeName.bcs,
    });
  }

  static fromFields(fields: Record<string, any>): PoolRegistryItem {
    return PoolRegistryItem.reified().new({
      a: decodeFromFields(TypeName.reified(), fields.a),
      b: decodeFromFields(TypeName.reified(), fields.b),
    });
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): PoolRegistryItem {
    if (!isPoolRegistryItem(item.type)) {
      throw new Error("not a PoolRegistryItem type");
    }

    return PoolRegistryItem.reified().new({
      a: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.a),
      b: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.b),
    });
  }

  static fromBcs(data: Uint8Array): PoolRegistryItem {
    return PoolRegistryItem.fromFields(PoolRegistryItem.bcs.parse(data));
  }

  toJSONField() {
    return {
      a: this.a.toJSONField(),
      b: this.b.toJSONField(),
    };
  }

  toJSON() {
    return {
      $typeName: this.$typeName,
      $typeArgs: this.$typeArgs,
      ...this.toJSONField(),
    };
  }

  static fromJSONField(field: any): PoolRegistryItem {
    return PoolRegistryItem.reified().new({
      a: decodeFromJSONField(TypeName.reified(), field.a),
      b: decodeFromJSONField(TypeName.reified(), field.b),
    });
  }

  static fromJSON(json: Record<string, any>): PoolRegistryItem {
    if (json.$typeName !== PoolRegistryItem.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }

    return PoolRegistryItem.fromJSONField(json);
  }

  static fromSuiParsedData(content: SuiParsedData): PoolRegistryItem {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isPoolRegistryItem(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a PoolRegistryItem object`,
      );
    }
    return PoolRegistryItem.fromFieldsWithTypes(content);
  }

  static fromSuiObjectData(data: SuiObjectData): PoolRegistryItem {
    if (data.bcs) {
      if (
        data.bcs.dataType !== "moveObject" ||
        !isPoolRegistryItem(data.bcs.type)
      ) {
        throw new Error(`object at is not a PoolRegistryItem object`);
      }

      return PoolRegistryItem.fromBcs(fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return PoolRegistryItem.fromSuiParsedData(data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch(client: SuiClient, id: string): Promise<PoolRegistryItem> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(
        `error fetching PoolRegistryItem object at id ${id}: ${res.error.code}`,
      );
    }
    if (
      res.data?.bcs?.dataType !== "moveObject" ||
      !isPoolRegistryItem(res.data.bcs.type)
    ) {
      throw new Error(`object at id ${id} is not a PoolRegistryItem object`);
    }

    return PoolRegistryItem.fromSuiObjectData(res.data);
  }
}
