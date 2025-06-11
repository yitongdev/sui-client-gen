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
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64 } from "@mysten/sui/utils";

export function isRandomGenerator(type: string): boolean {
  type = compressSuiType(type);
  return type === `${PKG_V31}::random::RandomGenerator`;
}

export interface RandomGeneratorFields {
  seed: ToField<Vector<"u8">>;
  counter: ToField<"u16">;
  buffer: ToField<Vector<"u8">>;
}

export type RandomGeneratorReified = Reified<
  RandomGenerator,
  RandomGeneratorFields
>;

/**
 * Move struct: `RandomGenerator`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::random`
 */
export class RandomGenerator implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V31}::random::RandomGenerator`;
  static readonly $numTypeParams = 0;
  static readonly $isPhantom = [] as const;

  readonly $typeName = RandomGenerator.$typeName;
  readonly $fullTypeName: `${typeof PKG_V31}::random::RandomGenerator`;
  readonly $typeArgs: [];
  readonly $isPhantom = RandomGenerator.$isPhantom;

  readonly seed: ToField<Vector<"u8">>;
  readonly counter: ToField<"u16">;
  readonly buffer: ToField<Vector<"u8">>;

  private constructor(typeArgs: [], fields: RandomGeneratorFields) {
    this.$fullTypeName = composeSuiType(
      RandomGenerator.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V31}::random::RandomGenerator`;
    this.$typeArgs = typeArgs;

    this.seed = fields.seed;
    this.counter = fields.counter;
    this.buffer = fields.buffer;
  }

  static reified(): RandomGeneratorReified {
    return {
      typeName: RandomGenerator.$typeName,
      fullTypeName: composeSuiType(
        RandomGenerator.$typeName,
        ...[],
      ) as `${typeof PKG_V31}::random::RandomGenerator`,
      typeArgs: [] as [],
      isPhantom: RandomGenerator.$isPhantom,
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) =>
        RandomGenerator.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        RandomGenerator.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => RandomGenerator.fromBcs(data),
      bcs: RandomGenerator.bcs,
      fromJSONField: (field: any) => RandomGenerator.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => RandomGenerator.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) =>
        RandomGenerator.fromSuiParsedData(content),
      fromSuiObjectData: (content: SuiObjectData) =>
        RandomGenerator.fromSuiObjectData(content),
      fetch: async (client: SuiClient, id: string) =>
        RandomGenerator.fetch(client, id),
      new: (fields: RandomGeneratorFields) => {
        return new RandomGenerator([], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return RandomGenerator.reified();
  }

  static phantom(): PhantomReified<ToTypeStr<RandomGenerator>> {
    return phantom(RandomGenerator.reified());
  }
  static get p() {
    return RandomGenerator.phantom();
  }

  static get bcs() {
    return bcs.struct("RandomGenerator", {
      seed: bcs.vector(bcs.u8()),
      counter: bcs.u16(),
      buffer: bcs.vector(bcs.u8()),
    });
  }

  static fromFields(fields: Record<string, any>): RandomGenerator {
    return RandomGenerator.reified().new({
      seed: decodeFromFields(reified.vector("u8"), fields.seed),
      counter: decodeFromFields("u16", fields.counter),
      buffer: decodeFromFields(reified.vector("u8"), fields.buffer),
    });
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): RandomGenerator {
    if (!isRandomGenerator(item.type)) {
      throw new Error("not a RandomGenerator type");
    }

    return RandomGenerator.reified().new({
      seed: decodeFromFieldsWithTypes(reified.vector("u8"), item.fields.seed),
      counter: decodeFromFieldsWithTypes("u16", item.fields.counter),
      buffer: decodeFromFieldsWithTypes(
        reified.vector("u8"),
        item.fields.buffer,
      ),
    });
  }

  static fromBcs(data: Uint8Array): RandomGenerator {
    return RandomGenerator.fromFields(RandomGenerator.bcs.parse(data));
  }

  toJSONField() {
    return {
      seed: fieldToJSON<Vector<"u8">>(`vector<u8>`, this.seed),
      counter: this.counter,
      buffer: fieldToJSON<Vector<"u8">>(`vector<u8>`, this.buffer),
    };
  }

  toJSON() {
    return {
      $typeName: this.$typeName,
      $typeArgs: this.$typeArgs,
      ...this.toJSONField(),
    };
  }

  static fromJSONField(field: any): RandomGenerator {
    return RandomGenerator.reified().new({
      seed: decodeFromJSONField(reified.vector("u8"), field.seed),
      counter: decodeFromJSONField("u16", field.counter),
      buffer: decodeFromJSONField(reified.vector("u8"), field.buffer),
    });
  }

  static fromJSON(json: Record<string, any>): RandomGenerator {
    if (json.$typeName !== RandomGenerator.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }

    return RandomGenerator.fromJSONField(json);
  }

  static fromSuiParsedData(content: SuiParsedData): RandomGenerator {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isRandomGenerator(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a RandomGenerator object`,
      );
    }
    return RandomGenerator.fromFieldsWithTypes(content);
  }

  static fromSuiObjectData(data: SuiObjectData): RandomGenerator {
    if (data.bcs) {
      if (
        data.bcs.dataType !== "moveObject" ||
        !isRandomGenerator(data.bcs.type)
      ) {
        throw new Error(`object at is not a RandomGenerator object`);
      }

      return RandomGenerator.fromBcs(fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return RandomGenerator.fromSuiParsedData(data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch(client: SuiClient, id: string): Promise<RandomGenerator> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(
        `error fetching RandomGenerator object at id ${id}: ${res.error.code}`,
      );
    }
    if (
      res.data?.bcs?.dataType !== "moveObject" ||
      !isRandomGenerator(res.data.bcs.type)
    ) {
      throw new Error(`object at id ${id} is not a RandomGenerator object`);
    }

    return RandomGenerator.fromSuiObjectData(res.data);
  }
}
