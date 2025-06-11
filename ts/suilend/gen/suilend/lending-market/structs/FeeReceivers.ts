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
import { PKG_V10 } from "../../constants.js";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64, fromHex, toHex } from "@mysten/sui/utils";

export function isFeeReceivers(type: string): boolean {
  type = compressSuiType(type);
  return type === `${PKG_V10}::lending_market::FeeReceivers`;
}

export interface FeeReceiversFields {
  receivers: ToField<Vector<"address">>;
  weights: ToField<Vector<"u64">>;
  totalWeight: ToField<"u64">;
}

export type FeeReceiversReified = Reified<FeeReceivers, FeeReceiversFields>;

/**
 * Move struct: `FeeReceivers`
 * Module: `f95b06141ed4a174f239417323bde3f209b972f5930d8521ea38a52aff3a6ddf::lending_market`
 */
export class FeeReceivers implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V10}::lending_market::FeeReceivers`;
  static readonly $numTypeParams = 0;
  static readonly $isPhantom = [] as const;

  readonly $typeName = FeeReceivers.$typeName;
  readonly $fullTypeName: `${typeof PKG_V10}::lending_market::FeeReceivers`;
  readonly $typeArgs: [];
  readonly $isPhantom = FeeReceivers.$isPhantom;

  readonly receivers: ToField<Vector<"address">>;
  readonly weights: ToField<Vector<"u64">>;
  readonly totalWeight: ToField<"u64">;

  private constructor(typeArgs: [], fields: FeeReceiversFields) {
    this.$fullTypeName = composeSuiType(
      FeeReceivers.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V10}::lending_market::FeeReceivers`;
    this.$typeArgs = typeArgs;

    this.receivers = fields.receivers;
    this.weights = fields.weights;
    this.totalWeight = fields.totalWeight;
  }

  static reified(): FeeReceiversReified {
    return {
      typeName: FeeReceivers.$typeName,
      fullTypeName: composeSuiType(
        FeeReceivers.$typeName,
        ...[],
      ) as `${typeof PKG_V10}::lending_market::FeeReceivers`,
      typeArgs: [] as [],
      isPhantom: FeeReceivers.$isPhantom,
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) =>
        FeeReceivers.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        FeeReceivers.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => FeeReceivers.fromBcs(data),
      bcs: FeeReceivers.bcs,
      fromJSONField: (field: any) => FeeReceivers.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => FeeReceivers.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) =>
        FeeReceivers.fromSuiParsedData(content),
      fromSuiObjectData: (content: SuiObjectData) =>
        FeeReceivers.fromSuiObjectData(content),
      fetch: async (client: SuiClient, id: string) =>
        FeeReceivers.fetch(client, id),
      new: (fields: FeeReceiversFields) => {
        return new FeeReceivers([], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return FeeReceivers.reified();
  }

  static phantom(): PhantomReified<ToTypeStr<FeeReceivers>> {
    return phantom(FeeReceivers.reified());
  }
  static get p() {
    return FeeReceivers.phantom();
  }

  static get bcs() {
    return bcs.struct("FeeReceivers", {
      receivers: bcs.vector(
        bcs.bytes(32).transform({
          input: (val: string) => fromHex(val),
          output: (val: Uint8Array) => toHex(val),
        }),
      ),
      weights: bcs.vector(bcs.u64()),
      total_weight: bcs.u64(),
    });
  }

  static fromFields(fields: Record<string, any>): FeeReceivers {
    return FeeReceivers.reified().new({
      receivers: decodeFromFields(reified.vector("address"), fields.receivers),
      weights: decodeFromFields(reified.vector("u64"), fields.weights),
      totalWeight: decodeFromFields("u64", fields.total_weight),
    });
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): FeeReceivers {
    if (!isFeeReceivers(item.type)) {
      throw new Error("not a FeeReceivers type");
    }

    return FeeReceivers.reified().new({
      receivers: decodeFromFieldsWithTypes(
        reified.vector("address"),
        item.fields.receivers,
      ),
      weights: decodeFromFieldsWithTypes(
        reified.vector("u64"),
        item.fields.weights,
      ),
      totalWeight: decodeFromFieldsWithTypes("u64", item.fields.total_weight),
    });
  }

  static fromBcs(data: Uint8Array): FeeReceivers {
    return FeeReceivers.fromFields(FeeReceivers.bcs.parse(data));
  }

  toJSONField() {
    return {
      receivers: fieldToJSON<Vector<"address">>(
        `vector<address>`,
        this.receivers,
      ),
      weights: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.weights),
      totalWeight: this.totalWeight.toString(),
    };
  }

  toJSON() {
    return {
      $typeName: this.$typeName,
      $typeArgs: this.$typeArgs,
      ...this.toJSONField(),
    };
  }

  static fromJSONField(field: any): FeeReceivers {
    return FeeReceivers.reified().new({
      receivers: decodeFromJSONField(
        reified.vector("address"),
        field.receivers,
      ),
      weights: decodeFromJSONField(reified.vector("u64"), field.weights),
      totalWeight: decodeFromJSONField("u64", field.totalWeight),
    });
  }

  static fromJSON(json: Record<string, any>): FeeReceivers {
    if (json.$typeName !== FeeReceivers.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }

    return FeeReceivers.fromJSONField(json);
  }

  static fromSuiParsedData(content: SuiParsedData): FeeReceivers {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isFeeReceivers(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a FeeReceivers object`,
      );
    }
    return FeeReceivers.fromFieldsWithTypes(content);
  }

  static fromSuiObjectData(data: SuiObjectData): FeeReceivers {
    if (data.bcs) {
      if (
        data.bcs.dataType !== "moveObject" ||
        !isFeeReceivers(data.bcs.type)
      ) {
        throw new Error(`object at is not a FeeReceivers object`);
      }

      return FeeReceivers.fromBcs(fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return FeeReceivers.fromSuiParsedData(data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch(client: SuiClient, id: string): Promise<FeeReceivers> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(
        `error fetching FeeReceivers object at id ${id}: ${res.error.code}`,
      );
    }
    if (
      res.data?.bcs?.dataType !== "moveObject" ||
      !isFeeReceivers(res.data.bcs.type)
    ) {
      throw new Error(`object at id ${id} is not a FeeReceivers object`);
    }

    return FeeReceivers.fromSuiObjectData(res.data);
  }
}
