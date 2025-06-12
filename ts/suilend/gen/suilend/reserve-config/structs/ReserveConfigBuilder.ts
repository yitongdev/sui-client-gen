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

export function isReserveConfigBuilder(type: string): boolean {
  type = compressSuiType(type);
  return type === `${PKG_V1}::reserve_config::ReserveConfigBuilder`;
}

export interface ReserveConfigBuilderFields {
  fields: ToField<Bag>;
}

export type ReserveConfigBuilderReified = Reified<ReserveConfigBuilder, ReserveConfigBuilderFields>;

/**
 * Move struct: `ReserveConfigBuilder`
 * Module: `f95b06141ed4a174f239417323bde3f209b972f5930d8521ea38a52aff3a6ddf::reserve_config`
 */
export class ReserveConfigBuilder implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V1}::reserve_config::ReserveConfigBuilder`;
  static readonly $numTypeParams = 0;
  static readonly $isPhantom = [] as const;

  readonly $typeName = ReserveConfigBuilder.$typeName;
  readonly $fullTypeName: `${typeof PKG_V1}::reserve_config::ReserveConfigBuilder`;
  readonly $typeArgs: [];
  readonly $isPhantom = ReserveConfigBuilder.$isPhantom;

  readonly fields: ToField<Bag>;

  private constructor(typeArgs: [], fields: ReserveConfigBuilderFields) {
    this.$fullTypeName = composeSuiType(
      ReserveConfigBuilder.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V1}::reserve_config::ReserveConfigBuilder`;
    this.$typeArgs = typeArgs;

    this.fields = fields.fields;
  }

  static reified(): ReserveConfigBuilderReified {
    return {
      typeName: ReserveConfigBuilder.$typeName,
      fullTypeName: composeSuiType(
        ReserveConfigBuilder.$typeName,
        ...[],
      ) as `${typeof PKG_V1}::reserve_config::ReserveConfigBuilder`,
      typeArgs: [] as [],
      isPhantom: ReserveConfigBuilder.$isPhantom,
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) => ReserveConfigBuilder.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        ReserveConfigBuilder.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => ReserveConfigBuilder.fromBcs(data),
      bcs: ReserveConfigBuilder.bcs,
      fromJSONField: (field: any) => ReserveConfigBuilder.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => ReserveConfigBuilder.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) =>
        ReserveConfigBuilder.fromSuiParsedData(content),
      fromSuiObjectData: (content: SuiObjectData) =>
        ReserveConfigBuilder.fromSuiObjectData(content),
      fetch: async (client: SuiClient, id: string) => ReserveConfigBuilder.fetch(client, id),
      new: (fields: ReserveConfigBuilderFields) => {
        return new ReserveConfigBuilder([], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return ReserveConfigBuilder.reified();
  }

  static phantom(): PhantomReified<ToTypeStr<ReserveConfigBuilder>> {
    return phantom(ReserveConfigBuilder.reified());
  }
  static get p() {
    return ReserveConfigBuilder.phantom();
  }

  static get bcs() {
    return bcs.struct("ReserveConfigBuilder", {
      fields: Bag.bcs,
    });
  }

  static fromFields(fields: Record<string, any>): ReserveConfigBuilder {
    return ReserveConfigBuilder.reified().new({
      fields: decodeFromFields(Bag.reified(), fields.fields),
    });
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): ReserveConfigBuilder {
    if (!isReserveConfigBuilder(item.type)) {
      throw new Error("not a ReserveConfigBuilder type");
    }

    return ReserveConfigBuilder.reified().new({
      fields: decodeFromFieldsWithTypes(Bag.reified(), item.fields.fields),
    });
  }

  static fromBcs(data: Uint8Array): ReserveConfigBuilder {
    return ReserveConfigBuilder.fromFields(ReserveConfigBuilder.bcs.parse(data));
  }

  toJSONField() {
    return {
      fields: this.fields.toJSONField(),
    };
  }

  toJSON() {
    return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
  }

  static fromJSONField(field: any): ReserveConfigBuilder {
    return ReserveConfigBuilder.reified().new({
      fields: decodeFromJSONField(Bag.reified(), field.fields),
    });
  }

  static fromJSON(json: Record<string, any>): ReserveConfigBuilder {
    if (json.$typeName !== ReserveConfigBuilder.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }

    return ReserveConfigBuilder.fromJSONField(json);
  }

  static fromSuiParsedData(content: SuiParsedData): ReserveConfigBuilder {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isReserveConfigBuilder(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a ReserveConfigBuilder object`,
      );
    }
    return ReserveConfigBuilder.fromFieldsWithTypes(content);
  }

  static fromSuiObjectData(data: SuiObjectData): ReserveConfigBuilder {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isReserveConfigBuilder(data.bcs.type)) {
        throw new Error(`object at ${data.objectId} is not a ReserveConfigBuilder object`);
      }

      return ReserveConfigBuilder.fromBcs(fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return ReserveConfigBuilder.fromSuiParsedData(data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch(client: SuiClient, id: string): Promise<ReserveConfigBuilder> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(`error fetching ReserveConfigBuilder object at id ${id}: ${res.error.code}`);
    }
    if (res.data?.bcs?.dataType !== "moveObject" || !isReserveConfigBuilder(res.data.bcs.type)) {
      throw new Error(`object at id ${id} is not a ReserveConfigBuilder object`);
    }

    return ReserveConfigBuilder.fromSuiObjectData(res.data);
  }
}
