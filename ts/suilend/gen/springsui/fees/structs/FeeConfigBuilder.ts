import { Bag } from "../../../_dependencies/onchain/0x2/bag/structs/index.js";
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
import { PKG_V1 } from "../../constants.js";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64 } from "@mysten/sui/utils";

export function isFeeConfigBuilder(type: string): boolean {
  type = compressSuiType(type);
  return type === `${PKG_V1}::fees::FeeConfigBuilder`;
}

export interface FeeConfigBuilderFields {
  fields: ToField<Bag>;
}

export type FeeConfigBuilderReified = Reified<FeeConfigBuilder, FeeConfigBuilderFields>;

/**
 * Move struct: `FeeConfigBuilder`
 * Module: `b0575765166030556a6eafd3b1b970eba8183ff748860680245b9edd41c716e7::fees`
 */
export class FeeConfigBuilder implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V1}::fees::FeeConfigBuilder`;
  static readonly $numTypeParams = 0;
  static readonly $isPhantom = [] as const;

  readonly $typeName = FeeConfigBuilder.$typeName;
  readonly $fullTypeName: `${typeof PKG_V1}::fees::FeeConfigBuilder`;
  readonly $typeArgs: [];
  readonly $isPhantom = FeeConfigBuilder.$isPhantom;

  readonly fields: ToField<Bag>;

  private constructor(typeArgs: [], fields: FeeConfigBuilderFields) {
    this.$fullTypeName = composeSuiType(
      FeeConfigBuilder.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V1}::fees::FeeConfigBuilder`;
    this.$typeArgs = typeArgs;

    this.fields = fields.fields;
  }

  static reified(): FeeConfigBuilderReified {
    return {
      typeName: FeeConfigBuilder.$typeName,
      fullTypeName: composeSuiType(
        FeeConfigBuilder.$typeName,
        ...[],
      ) as `${typeof PKG_V1}::fees::FeeConfigBuilder`,
      typeArgs: [] as [],
      isPhantom: FeeConfigBuilder.$isPhantom,
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) => FeeConfigBuilder.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) => FeeConfigBuilder.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => FeeConfigBuilder.fromBcs(data),
      bcs: FeeConfigBuilder.bcs,
      fromJSONField: (field: any) => FeeConfigBuilder.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => FeeConfigBuilder.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) => FeeConfigBuilder.fromSuiParsedData(content),
      fromSuiObjectData: (content: SuiObjectData) => FeeConfigBuilder.fromSuiObjectData(content),
      fetch: async (client: SuiClient, id: string) => FeeConfigBuilder.fetch(client, id),
      new: (fields: FeeConfigBuilderFields) => {
        return new FeeConfigBuilder([], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return FeeConfigBuilder.reified();
  }

  static phantom(): PhantomReified<ToTypeStr<FeeConfigBuilder>> {
    return phantom(FeeConfigBuilder.reified());
  }
  static get p() {
    return FeeConfigBuilder.phantom();
  }

  static get bcs() {
    return bcs.struct("FeeConfigBuilder", {
      fields: Bag.bcs,
    });
  }

  static fromFields(fields: Record<string, any>): FeeConfigBuilder {
    return FeeConfigBuilder.reified().new({
      fields: decodeFromFields(Bag.reified(), fields.fields),
    });
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): FeeConfigBuilder {
    if (!isFeeConfigBuilder(item.type)) {
      throw new Error("not a FeeConfigBuilder type");
    }

    return FeeConfigBuilder.reified().new({
      fields: decodeFromFieldsWithTypes(Bag.reified(), item.fields.fields),
    });
  }

  static fromBcs(data: Uint8Array): FeeConfigBuilder {
    return FeeConfigBuilder.fromFields(FeeConfigBuilder.bcs.parse(data));
  }

  toJSONField() {
    return {
      fields: this.fields.toJSONField(),
    };
  }

  toJSON() {
    return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
  }

  static fromJSONField(field: any): FeeConfigBuilder {
    return FeeConfigBuilder.reified().new({
      fields: decodeFromJSONField(Bag.reified(), field.fields),
    });
  }

  static fromJSON(json: Record<string, any>): FeeConfigBuilder {
    if (json.$typeName !== FeeConfigBuilder.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }

    return FeeConfigBuilder.fromJSONField(json);
  }

  static fromSuiParsedData(content: SuiParsedData): FeeConfigBuilder {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isFeeConfigBuilder(content.type)) {
      throw new Error(`object at ${(content.fields as any).id} is not a FeeConfigBuilder object`);
    }
    return FeeConfigBuilder.fromFieldsWithTypes(content);
  }

  static fromSuiObjectData(data: SuiObjectData): FeeConfigBuilder {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isFeeConfigBuilder(data.bcs.type)) {
        throw new Error(`object at ${data.objectId} is not a FeeConfigBuilder object`);
      }

      return FeeConfigBuilder.fromBcs(fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return FeeConfigBuilder.fromSuiParsedData(data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch(client: SuiClient, id: string): Promise<FeeConfigBuilder> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(`error fetching FeeConfigBuilder object at id ${id}: ${res.error.code}`);
    }
    if (res.data?.bcs?.dataType !== "moveObject" || !isFeeConfigBuilder(res.data.bcs.type)) {
      throw new Error(`object at id ${id} is not a FeeConfigBuilder object`);
    }

    return FeeConfigBuilder.fromSuiObjectData(res.data);
  }
}
