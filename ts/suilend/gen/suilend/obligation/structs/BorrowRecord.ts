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

export function isBorrowRecord(type: string): boolean {
  type = compressSuiType(type);
  return type === `${PKG_V1}::obligation::BorrowRecord`;
}

export interface BorrowRecordFields {
  coinType: ToField<TypeName>;
  reserveArrayIndex: ToField<"u64">;
  borrowedAmount: ToField<Decimal>;
  cumulativeBorrowRate: ToField<Decimal>;
  marketValue: ToField<Decimal>;
  userRewardManagerIndex: ToField<"u64">;
}

export type BorrowRecordReified = Reified<BorrowRecord, BorrowRecordFields>;

/**
 * Move struct: `BorrowRecord`
 * Module: `f95b06141ed4a174f239417323bde3f209b972f5930d8521ea38a52aff3a6ddf::obligation`
 */
export class BorrowRecord implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V1}::obligation::BorrowRecord`;
  static readonly $numTypeParams = 0;
  static readonly $isPhantom = [] as const;

  readonly $typeName = BorrowRecord.$typeName;
  readonly $fullTypeName: `${typeof PKG_V1}::obligation::BorrowRecord`;
  readonly $typeArgs: [];
  readonly $isPhantom = BorrowRecord.$isPhantom;

  readonly coinType: ToField<TypeName>;
  readonly reserveArrayIndex: ToField<"u64">;
  readonly borrowedAmount: ToField<Decimal>;
  readonly cumulativeBorrowRate: ToField<Decimal>;
  readonly marketValue: ToField<Decimal>;
  readonly userRewardManagerIndex: ToField<"u64">;

  private constructor(typeArgs: [], fields: BorrowRecordFields) {
    this.$fullTypeName = composeSuiType(
      BorrowRecord.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V1}::obligation::BorrowRecord`;
    this.$typeArgs = typeArgs;

    this.coinType = fields.coinType;
    this.reserveArrayIndex = fields.reserveArrayIndex;
    this.borrowedAmount = fields.borrowedAmount;
    this.cumulativeBorrowRate = fields.cumulativeBorrowRate;
    this.marketValue = fields.marketValue;
    this.userRewardManagerIndex = fields.userRewardManagerIndex;
  }

  static reified(): BorrowRecordReified {
    return {
      typeName: BorrowRecord.$typeName,
      fullTypeName: composeSuiType(
        BorrowRecord.$typeName,
        ...[],
      ) as `${typeof PKG_V1}::obligation::BorrowRecord`,
      typeArgs: [] as [],
      isPhantom: BorrowRecord.$isPhantom,
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) => BorrowRecord.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) => BorrowRecord.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => BorrowRecord.fromBcs(data),
      bcs: BorrowRecord.bcs,
      fromJSONField: (field: any) => BorrowRecord.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => BorrowRecord.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) => BorrowRecord.fromSuiParsedData(content),
      fromSuiObjectData: (content: SuiObjectData) => BorrowRecord.fromSuiObjectData(content),
      fetch: async (client: SuiClient, id: string) => BorrowRecord.fetch(client, id),
      new: (fields: BorrowRecordFields) => {
        return new BorrowRecord([], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return BorrowRecord.reified();
  }

  static phantom(): PhantomReified<ToTypeStr<BorrowRecord>> {
    return phantom(BorrowRecord.reified());
  }
  static get p() {
    return BorrowRecord.phantom();
  }

  static get bcs() {
    return bcs.struct("BorrowRecord", {
      coin_type: TypeName.bcs,
      reserve_array_index: bcs.u64(),
      borrowed_amount: Decimal.bcs,
      cumulative_borrow_rate: Decimal.bcs,
      market_value: Decimal.bcs,
      user_reward_manager_index: bcs.u64(),
    });
  }

  static fromFields(fields: Record<string, any>): BorrowRecord {
    return BorrowRecord.reified().new({
      coinType: decodeFromFields(TypeName.reified(), fields.coin_type),
      reserveArrayIndex: decodeFromFields("u64", fields.reserve_array_index),
      borrowedAmount: decodeFromFields(Decimal.reified(), fields.borrowed_amount),
      cumulativeBorrowRate: decodeFromFields(Decimal.reified(), fields.cumulative_borrow_rate),
      marketValue: decodeFromFields(Decimal.reified(), fields.market_value),
      userRewardManagerIndex: decodeFromFields("u64", fields.user_reward_manager_index),
    });
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): BorrowRecord {
    if (!isBorrowRecord(item.type)) {
      throw new Error("not a BorrowRecord type");
    }

    return BorrowRecord.reified().new({
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

  static fromBcs(data: Uint8Array): BorrowRecord {
    return BorrowRecord.fromFields(BorrowRecord.bcs.parse(data));
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

  static fromJSONField(field: any): BorrowRecord {
    return BorrowRecord.reified().new({
      coinType: decodeFromJSONField(TypeName.reified(), field.coinType),
      reserveArrayIndex: decodeFromJSONField("u64", field.reserveArrayIndex),
      borrowedAmount: decodeFromJSONField(Decimal.reified(), field.borrowedAmount),
      cumulativeBorrowRate: decodeFromJSONField(Decimal.reified(), field.cumulativeBorrowRate),
      marketValue: decodeFromJSONField(Decimal.reified(), field.marketValue),
      userRewardManagerIndex: decodeFromJSONField("u64", field.userRewardManagerIndex),
    });
  }

  static fromJSON(json: Record<string, any>): BorrowRecord {
    if (json.$typeName !== BorrowRecord.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }

    return BorrowRecord.fromJSONField(json);
  }

  static fromSuiParsedData(content: SuiParsedData): BorrowRecord {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isBorrowRecord(content.type)) {
      throw new Error(`object at ${(content.fields as any).id} is not a BorrowRecord object`);
    }
    return BorrowRecord.fromFieldsWithTypes(content);
  }

  static fromSuiObjectData(data: SuiObjectData): BorrowRecord {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isBorrowRecord(data.bcs.type)) {
        throw new Error(`object at ${data.objectId} is not a BorrowRecord object`);
      }

      return BorrowRecord.fromBcs(fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return BorrowRecord.fromSuiParsedData(data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch(client: SuiClient, id: string): Promise<BorrowRecord> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(`error fetching BorrowRecord object at id ${id}: ${res.error.code}`);
    }
    if (res.data?.bcs?.dataType !== "moveObject" || !isBorrowRecord(res.data.bcs.type)) {
      throw new Error(`object at id ${id} is not a BorrowRecord object`);
    }

    return BorrowRecord.fromSuiObjectData(res.data);
  }
}
