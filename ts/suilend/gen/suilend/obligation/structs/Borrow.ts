import { TypeName } from "../../../_dependencies/onchain/0x1/type-name/structs/index.js";
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
import { Decimal } from "../../decimal/structs/index.js";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64 } from "@mysten/sui/utils";

export function isBorrow(type: string): boolean {
  type = compressSuiType(type);
  return type === `${PKG_V1}::obligation::Borrow`;
}

export interface BorrowFields {
  coinType: ToField<TypeName>;
  reserveArrayIndex: ToField<"u64">;
  borrowedAmount: ToField<Decimal>;
  cumulativeBorrowRate: ToField<Decimal>;
  marketValue: ToField<Decimal>;
  userRewardManagerIndex: ToField<"u64">;
}

export type BorrowReified = Reified<Borrow, BorrowFields>;

/**
 * Move struct: `Borrow`
 * Module: `f95b06141ed4a174f239417323bde3f209b972f5930d8521ea38a52aff3a6ddf::obligation`
 */
export class Borrow implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V1}::obligation::Borrow`;
  static readonly $numTypeParams = 0;
  static readonly $isPhantom = [] as const;

  readonly $typeName = Borrow.$typeName;
  readonly $fullTypeName: `${typeof PKG_V1}::obligation::Borrow`;
  readonly $typeArgs: [];
  readonly $isPhantom = Borrow.$isPhantom;

  readonly coinType: ToField<TypeName>;
  readonly reserveArrayIndex: ToField<"u64">;
  readonly borrowedAmount: ToField<Decimal>;
  readonly cumulativeBorrowRate: ToField<Decimal>;
  readonly marketValue: ToField<Decimal>;
  readonly userRewardManagerIndex: ToField<"u64">;

  private constructor(typeArgs: [], fields: BorrowFields) {
    this.$fullTypeName = composeSuiType(
      Borrow.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V1}::obligation::Borrow`;
    this.$typeArgs = typeArgs;

    this.coinType = fields.coinType;
    this.reserveArrayIndex = fields.reserveArrayIndex;
    this.borrowedAmount = fields.borrowedAmount;
    this.cumulativeBorrowRate = fields.cumulativeBorrowRate;
    this.marketValue = fields.marketValue;
    this.userRewardManagerIndex = fields.userRewardManagerIndex;
  }

  static reified(): BorrowReified {
    return {
      typeName: Borrow.$typeName,
      fullTypeName: composeSuiType(
        Borrow.$typeName,
        ...[],
      ) as `${typeof PKG_V1}::obligation::Borrow`,
      typeArgs: [] as [],
      isPhantom: Borrow.$isPhantom,
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) => Borrow.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) => Borrow.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => Borrow.fromBcs(data),
      bcs: Borrow.bcs,
      fromJSONField: (field: any) => Borrow.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => Borrow.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) => Borrow.fromSuiParsedData(content),
      fromSuiObjectData: (content: SuiObjectData) => Borrow.fromSuiObjectData(content),
      fetch: async (client: SuiClient, id: string) => Borrow.fetch(client, id),
      new: (fields: BorrowFields) => {
        return new Borrow([], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return Borrow.reified();
  }

  static phantom(): PhantomReified<ToTypeStr<Borrow>> {
    return phantom(Borrow.reified());
  }
  static get p() {
    return Borrow.phantom();
  }

  static get bcs() {
    return bcs.struct("Borrow", {
      coin_type: TypeName.bcs,
      reserve_array_index: bcs.u64(),
      borrowed_amount: Decimal.bcs,
      cumulative_borrow_rate: Decimal.bcs,
      market_value: Decimal.bcs,
      user_reward_manager_index: bcs.u64(),
    });
  }

  static fromFields(fields: Record<string, any>): Borrow {
    return Borrow.reified().new({
      coinType: decodeFromFields(TypeName.reified(), fields.coin_type),
      reserveArrayIndex: decodeFromFields("u64", fields.reserve_array_index),
      borrowedAmount: decodeFromFields(Decimal.reified(), fields.borrowed_amount),
      cumulativeBorrowRate: decodeFromFields(Decimal.reified(), fields.cumulative_borrow_rate),
      marketValue: decodeFromFields(Decimal.reified(), fields.market_value),
      userRewardManagerIndex: decodeFromFields("u64", fields.user_reward_manager_index),
    });
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): Borrow {
    if (!isBorrow(item.type)) {
      throw new Error("not a Borrow type");
    }

    return Borrow.reified().new({
      coinType: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.coin_type),
      reserveArrayIndex: decodeFromFieldsWithTypes("u64", item.fields.reserve_array_index),
      borrowedAmount: decodeFromFieldsWithTypes(Decimal.reified(), item.fields.borrowed_amount),
      cumulativeBorrowRate: decodeFromFieldsWithTypes(
        Decimal.reified(),
        item.fields.cumulative_borrow_rate,
      ),
      marketValue: decodeFromFieldsWithTypes(Decimal.reified(), item.fields.market_value),
      userRewardManagerIndex: decodeFromFieldsWithTypes(
        "u64",
        item.fields.user_reward_manager_index,
      ),
    });
  }

  static fromBcs(data: Uint8Array): Borrow {
    return Borrow.fromFields(Borrow.bcs.parse(data));
  }

  toJSONField() {
    return {
      coinType: this.coinType.toJSONField(),
      reserveArrayIndex: this.reserveArrayIndex.toString(),
      borrowedAmount: this.borrowedAmount.toJSONField(),
      cumulativeBorrowRate: this.cumulativeBorrowRate.toJSONField(),
      marketValue: this.marketValue.toJSONField(),
      userRewardManagerIndex: this.userRewardManagerIndex.toString(),
    };
  }

  toJSON() {
    return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
  }

  static fromJSONField(field: any): Borrow {
    return Borrow.reified().new({
      coinType: decodeFromJSONField(TypeName.reified(), field.coinType),
      reserveArrayIndex: decodeFromJSONField("u64", field.reserveArrayIndex),
      borrowedAmount: decodeFromJSONField(Decimal.reified(), field.borrowedAmount),
      cumulativeBorrowRate: decodeFromJSONField(Decimal.reified(), field.cumulativeBorrowRate),
      marketValue: decodeFromJSONField(Decimal.reified(), field.marketValue),
      userRewardManagerIndex: decodeFromJSONField("u64", field.userRewardManagerIndex),
    });
  }

  static fromJSON(json: Record<string, any>): Borrow {
    if (json.$typeName !== Borrow.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }

    return Borrow.fromJSONField(json);
  }

  static fromSuiParsedData(content: SuiParsedData): Borrow {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isBorrow(content.type)) {
      throw new Error(`object at ${(content.fields as any).id} is not a Borrow object`);
    }
    return Borrow.fromFieldsWithTypes(content);
  }

  static fromSuiObjectData(data: SuiObjectData): Borrow {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isBorrow(data.bcs.type)) {
        throw new Error(`object at ${data.objectId} is not a Borrow object`);
      }

      return Borrow.fromBcs(fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return Borrow.fromSuiParsedData(data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch(client: SuiClient, id: string): Promise<Borrow> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(`error fetching Borrow object at id ${id}: ${res.error.code}`);
    }
    if (res.data?.bcs?.dataType !== "moveObject" || !isBorrow(res.data.bcs.type)) {
      throw new Error(`object at id ${id} is not a Borrow object`);
    }

    return Borrow.fromSuiObjectData(res.data);
  }
}
