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
import { FieldsWithTypes, composeSuiType, compressSuiType } from "../../../_framework/util.js";
import { Vector } from "../../../_framework/vector.js";
import { PKG_V31 } from "../../constants.js";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64 } from "@mysten/sui/utils";

export function isRandomInner(type: string): boolean {
  type = compressSuiType(type);
  return type === `${PKG_V31}::random::RandomInner`;
}

export interface RandomInnerFields {
  version: ToField<"u64">;
  epoch: ToField<"u64">;
  randomnessRound: ToField<"u64">;
  randomBytes: ToField<Vector<"u8">>;
}

export type RandomInnerReified = Reified<RandomInner, RandomInnerFields>;

/**
 * Move struct: `RandomInner`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::random`
 */
export class RandomInner implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V31}::random::RandomInner`;
  static readonly $numTypeParams = 0;
  static readonly $isPhantom = [] as const;

  readonly $typeName = RandomInner.$typeName;
  readonly $fullTypeName: `${typeof PKG_V31}::random::RandomInner`;
  readonly $typeArgs: [];
  readonly $isPhantom = RandomInner.$isPhantom;

  readonly version: ToField<"u64">;
  readonly epoch: ToField<"u64">;
  readonly randomnessRound: ToField<"u64">;
  readonly randomBytes: ToField<Vector<"u8">>;

  private constructor(typeArgs: [], fields: RandomInnerFields) {
    this.$fullTypeName = composeSuiType(
      RandomInner.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V31}::random::RandomInner`;
    this.$typeArgs = typeArgs;

    this.version = fields.version;
    this.epoch = fields.epoch;
    this.randomnessRound = fields.randomnessRound;
    this.randomBytes = fields.randomBytes;
  }

  static reified(): RandomInnerReified {
    return {
      typeName: RandomInner.$typeName,
      fullTypeName: composeSuiType(
        RandomInner.$typeName,
        ...[],
      ) as `${typeof PKG_V31}::random::RandomInner`,
      typeArgs: [] as [],
      isPhantom: RandomInner.$isPhantom,
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) => RandomInner.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) => RandomInner.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => RandomInner.fromBcs(data),
      bcs: RandomInner.bcs,
      fromJSONField: (field: any) => RandomInner.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => RandomInner.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) => RandomInner.fromSuiParsedData(content),
      fromSuiObjectData: (content: SuiObjectData) => RandomInner.fromSuiObjectData(content),
      fetch: async (client: SuiClient, id: string) => RandomInner.fetch(client, id),
      new: (fields: RandomInnerFields) => {
        return new RandomInner([], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return RandomInner.reified();
  }

  static phantom(): PhantomReified<ToTypeStr<RandomInner>> {
    return phantom(RandomInner.reified());
  }
  static get p() {
    return RandomInner.phantom();
  }

  static get bcs() {
    return bcs.struct("RandomInner", {
      version: bcs.u64(),
      epoch: bcs.u64(),
      randomness_round: bcs.u64(),
      random_bytes: bcs.vector(bcs.u8()),
    });
  }

  static fromFields(fields: Record<string, any>): RandomInner {
    return RandomInner.reified().new({
      version: decodeFromFields("u64", fields.version),
      epoch: decodeFromFields("u64", fields.epoch),
      randomnessRound: decodeFromFields("u64", fields.randomness_round),
      randomBytes: decodeFromFields(reified.vector("u8"), fields.random_bytes),
    });
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): RandomInner {
    if (!isRandomInner(item.type)) {
      throw new Error("not a RandomInner type");
    }

    return RandomInner.reified().new({
      version: decodeFromFieldsWithTypes("u64", item.fields.version),
      epoch: decodeFromFieldsWithTypes("u64", item.fields.epoch),
      randomnessRound: decodeFromFieldsWithTypes("u64", item.fields.randomness_round),
      randomBytes: decodeFromFieldsWithTypes(reified.vector("u8"), item.fields.random_bytes),
    });
  }

  static fromBcs(data: Uint8Array): RandomInner {
    return RandomInner.fromFields(RandomInner.bcs.parse(data));
  }

  toJSONField() {
    return {
      version: this.version.toString(),
      epoch: this.epoch.toString(),
      randomnessRound: this.randomnessRound.toString(),
      randomBytes: fieldToJSON<Vector<"u8">>(`vector<u8>`, this.randomBytes),
    };
  }

  toJSON() {
    return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
  }

  static fromJSONField(field: any): RandomInner {
    return RandomInner.reified().new({
      version: decodeFromJSONField("u64", field.version),
      epoch: decodeFromJSONField("u64", field.epoch),
      randomnessRound: decodeFromJSONField("u64", field.randomnessRound),
      randomBytes: decodeFromJSONField(reified.vector("u8"), field.randomBytes),
    });
  }

  static fromJSON(json: Record<string, any>): RandomInner {
    if (json.$typeName !== RandomInner.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }

    return RandomInner.fromJSONField(json);
  }

  static fromSuiParsedData(content: SuiParsedData): RandomInner {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isRandomInner(content.type)) {
      throw new Error(`object at ${(content.fields as any).id} is not a RandomInner object`);
    }
    return RandomInner.fromFieldsWithTypes(content);
  }

  static fromSuiObjectData(data: SuiObjectData): RandomInner {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isRandomInner(data.bcs.type)) {
        throw new Error(`object at ${data.objectId} is not a RandomInner object`);
      }

      return RandomInner.fromBcs(fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return RandomInner.fromSuiParsedData(data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch(client: SuiClient, id: string): Promise<RandomInner> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(`error fetching RandomInner object at id ${id}: ${res.error.code}`);
    }
    if (res.data?.bcs?.dataType !== "moveObject" || !isRandomInner(res.data.bcs.type)) {
      throw new Error(`object at id ${id} is not a RandomInner object`);
    }

    return RandomInner.fromSuiObjectData(res.data);
  }
}
