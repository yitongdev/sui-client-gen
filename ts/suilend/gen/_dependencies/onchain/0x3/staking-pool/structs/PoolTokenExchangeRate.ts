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
import { PKG_V21 } from "../../constants.js";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64 } from "@mysten/sui/utils";

export function isPoolTokenExchangeRate(type: string): boolean {
  type = compressSuiType(type);
  return type === `${PKG_V21}::staking_pool::PoolTokenExchangeRate`;
}

export interface PoolTokenExchangeRateFields {
  suiAmount: ToField<"u64">;
  poolTokenAmount: ToField<"u64">;
}

export type PoolTokenExchangeRateReified = Reified<
  PoolTokenExchangeRate,
  PoolTokenExchangeRateFields
>;

/**
 * Move struct: `PoolTokenExchangeRate`
 * Module: `0000000000000000000000000000000000000000000000000000000000000003::staking_pool`
 */
export class PoolTokenExchangeRate implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V21}::staking_pool::PoolTokenExchangeRate`;
  static readonly $numTypeParams = 0;
  static readonly $isPhantom = [] as const;

  readonly $typeName = PoolTokenExchangeRate.$typeName;
  readonly $fullTypeName: `${typeof PKG_V21}::staking_pool::PoolTokenExchangeRate`;
  readonly $typeArgs: [];
  readonly $isPhantom = PoolTokenExchangeRate.$isPhantom;

  readonly suiAmount: ToField<"u64">;
  readonly poolTokenAmount: ToField<"u64">;

  private constructor(typeArgs: [], fields: PoolTokenExchangeRateFields) {
    this.$fullTypeName = composeSuiType(
      PoolTokenExchangeRate.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V21}::staking_pool::PoolTokenExchangeRate`;
    this.$typeArgs = typeArgs;

    this.suiAmount = fields.suiAmount;
    this.poolTokenAmount = fields.poolTokenAmount;
  }

  static reified(): PoolTokenExchangeRateReified {
    return {
      typeName: PoolTokenExchangeRate.$typeName,
      fullTypeName: composeSuiType(
        PoolTokenExchangeRate.$typeName,
        ...[],
      ) as `${typeof PKG_V21}::staking_pool::PoolTokenExchangeRate`,
      typeArgs: [] as [],
      isPhantom: PoolTokenExchangeRate.$isPhantom,
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) =>
        PoolTokenExchangeRate.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        PoolTokenExchangeRate.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => PoolTokenExchangeRate.fromBcs(data),
      bcs: PoolTokenExchangeRate.bcs,
      fromJSONField: (field: any) => PoolTokenExchangeRate.fromJSONField(field),
      fromJSON: (json: Record<string, any>) =>
        PoolTokenExchangeRate.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) =>
        PoolTokenExchangeRate.fromSuiParsedData(content),
      fromSuiObjectData: (content: SuiObjectData) =>
        PoolTokenExchangeRate.fromSuiObjectData(content),
      fetch: async (client: SuiClient, id: string) =>
        PoolTokenExchangeRate.fetch(client, id),
      new: (fields: PoolTokenExchangeRateFields) => {
        return new PoolTokenExchangeRate([], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return PoolTokenExchangeRate.reified();
  }

  static phantom(): PhantomReified<ToTypeStr<PoolTokenExchangeRate>> {
    return phantom(PoolTokenExchangeRate.reified());
  }
  static get p() {
    return PoolTokenExchangeRate.phantom();
  }

  static get bcs() {
    return bcs.struct("PoolTokenExchangeRate", {
      sui_amount: bcs.u64(),
      pool_token_amount: bcs.u64(),
    });
  }

  static fromFields(fields: Record<string, any>): PoolTokenExchangeRate {
    return PoolTokenExchangeRate.reified().new({
      suiAmount: decodeFromFields("u64", fields.sui_amount),
      poolTokenAmount: decodeFromFields("u64", fields.pool_token_amount),
    });
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): PoolTokenExchangeRate {
    if (!isPoolTokenExchangeRate(item.type)) {
      throw new Error("not a PoolTokenExchangeRate type");
    }

    return PoolTokenExchangeRate.reified().new({
      suiAmount: decodeFromFieldsWithTypes("u64", item.fields.sui_amount),
      poolTokenAmount: decodeFromFieldsWithTypes(
        "u64",
        item.fields.pool_token_amount,
      ),
    });
  }

  static fromBcs(data: Uint8Array): PoolTokenExchangeRate {
    return PoolTokenExchangeRate.fromFields(
      PoolTokenExchangeRate.bcs.parse(data),
    );
  }

  toJSONField() {
    return {
      suiAmount: this.suiAmount.toString(),
      poolTokenAmount: this.poolTokenAmount.toString(),
    };
  }

  toJSON() {
    return {
      $typeName: this.$typeName,
      $typeArgs: this.$typeArgs,
      ...this.toJSONField(),
    };
  }

  static fromJSONField(field: any): PoolTokenExchangeRate {
    return PoolTokenExchangeRate.reified().new({
      suiAmount: decodeFromJSONField("u64", field.suiAmount),
      poolTokenAmount: decodeFromJSONField("u64", field.poolTokenAmount),
    });
  }

  static fromJSON(json: Record<string, any>): PoolTokenExchangeRate {
    if (json.$typeName !== PoolTokenExchangeRate.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }

    return PoolTokenExchangeRate.fromJSONField(json);
  }

  static fromSuiParsedData(content: SuiParsedData): PoolTokenExchangeRate {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isPoolTokenExchangeRate(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a PoolTokenExchangeRate object`,
      );
    }
    return PoolTokenExchangeRate.fromFieldsWithTypes(content);
  }

  static fromSuiObjectData(data: SuiObjectData): PoolTokenExchangeRate {
    if (data.bcs) {
      if (
        data.bcs.dataType !== "moveObject" ||
        !isPoolTokenExchangeRate(data.bcs.type)
      ) {
        throw new Error(`object at is not a PoolTokenExchangeRate object`);
      }

      return PoolTokenExchangeRate.fromBcs(fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return PoolTokenExchangeRate.fromSuiParsedData(data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch(
    client: SuiClient,
    id: string,
  ): Promise<PoolTokenExchangeRate> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(
        `error fetching PoolTokenExchangeRate object at id ${id}: ${res.error.code}`,
      );
    }
    if (
      res.data?.bcs?.dataType !== "moveObject" ||
      !isPoolTokenExchangeRate(res.data.bcs.type)
    ) {
      throw new Error(
        `object at id ${id} is not a PoolTokenExchangeRate object`,
      );
    }

    return PoolTokenExchangeRate.fromSuiObjectData(res.data);
  }
}
