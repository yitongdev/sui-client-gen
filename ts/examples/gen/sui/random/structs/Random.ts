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
import { UID } from "../../object/structs/index.js";
import { Versioned } from "../../versioned/structs/index.js";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64 } from "@mysten/sui/utils";

export function isRandom(type: string): boolean {
  type = compressSuiType(type);
  return type === `${PKG_V31}::random::Random`;
}

export interface RandomFields {
  id: ToField<UID>;
  inner: ToField<Versioned>;
}

export type RandomReified = Reified<Random, RandomFields>;

/**
 * Move struct: `Random`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::random`
 */
export class Random implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V31}::random::Random`;
  static readonly $numTypeParams = 0;
  static readonly $isPhantom = [] as const;

  readonly $typeName = Random.$typeName;
  readonly $fullTypeName: `${typeof PKG_V31}::random::Random`;
  readonly $typeArgs: [];
  readonly $isPhantom = Random.$isPhantom;

  readonly id: ToField<UID>;
  readonly inner: ToField<Versioned>;

  private constructor(typeArgs: [], fields: RandomFields) {
    this.$fullTypeName = composeSuiType(
      Random.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V31}::random::Random`;
    this.$typeArgs = typeArgs;

    this.id = fields.id;
    this.inner = fields.inner;
  }

  static reified(): RandomReified {
    return {
      typeName: Random.$typeName,
      fullTypeName: composeSuiType(Random.$typeName, ...[]) as `${typeof PKG_V31}::random::Random`,
      typeArgs: [] as [],
      isPhantom: Random.$isPhantom,
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) => Random.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) => Random.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => Random.fromBcs(data),
      bcs: Random.bcs,
      fromJSONField: (field: any) => Random.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => Random.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) => Random.fromSuiParsedData(content),
      fromSuiObjectData: (content: SuiObjectData) => Random.fromSuiObjectData(content),
      fetch: async (client: SuiClient, id: string) => Random.fetch(client, id),
      new: (fields: RandomFields) => {
        return new Random([], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return Random.reified();
  }

  static phantom(): PhantomReified<ToTypeStr<Random>> {
    return phantom(Random.reified());
  }
  static get p() {
    return Random.phantom();
  }

  static get bcs() {
    return bcs.struct("Random", {
      id: UID.bcs,
      inner: Versioned.bcs,
    });
  }

  static fromFields(fields: Record<string, any>): Random {
    return Random.reified().new({
      id: decodeFromFields(UID.reified(), fields.id),
      inner: decodeFromFields(Versioned.reified(), fields.inner),
    });
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): Random {
    if (!isRandom(item.type)) {
      throw new Error("not a Random type");
    }

    return Random.reified().new({
      id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id),
      inner: decodeFromFieldsWithTypes(Versioned.reified(), item.fields.inner),
    });
  }

  static fromBcs(data: Uint8Array): Random {
    return Random.fromFields(Random.bcs.parse(data));
  }

  toJSONField() {
    return {
      id: this.id,
      inner: this.inner.toJSONField(),
    };
  }

  toJSON() {
    return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
  }

  static fromJSONField(field: any): Random {
    return Random.reified().new({
      id: decodeFromJSONField(UID.reified(), field.id),
      inner: decodeFromJSONField(Versioned.reified(), field.inner),
    });
  }

  static fromJSON(json: Record<string, any>): Random {
    if (json.$typeName !== Random.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }

    return Random.fromJSONField(json);
  }

  static fromSuiParsedData(content: SuiParsedData): Random {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isRandom(content.type)) {
      throw new Error(`object at ${(content.fields as any).id} is not a Random object`);
    }
    return Random.fromFieldsWithTypes(content);
  }

  static fromSuiObjectData(data: SuiObjectData): Random {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isRandom(data.bcs.type)) {
        throw new Error(`object at ${data.objectId} is not a Random object`);
      }

      return Random.fromBcs(fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return Random.fromSuiParsedData(data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch(client: SuiClient, id: string): Promise<Random> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(`error fetching Random object at id ${id}: ${res.error.code}`);
    }
    if (res.data?.bcs?.dataType !== "moveObject" || !isRandom(res.data.bcs.type)) {
      throw new Error(`object at id ${id} is not a Random object`);
    }

    return Random.fromSuiObjectData(res.data);
  }
}
