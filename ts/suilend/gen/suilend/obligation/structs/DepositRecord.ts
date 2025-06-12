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

export function isDepositRecord(type: string): boolean {
  type = compressSuiType(type);
  return type === `${PKG_V1}::obligation::DepositRecord`;
}

export interface DepositRecordFields {
  coinType: ToField<TypeName>;
  reserveArrayIndex: ToField<"u64">;
  depositedCtokenAmount: ToField<"u64">;
  marketValue: ToField<Decimal>;
  userRewardManagerIndex: ToField<"u64">;
  attributedBorrowValue: ToField<Decimal>;
}

export type DepositRecordReified = Reified<DepositRecord, DepositRecordFields>;

/**
 * Move struct: `DepositRecord`
 * Module: `f95b06141ed4a174f239417323bde3f209b972f5930d8521ea38a52aff3a6ddf::obligation`
 */
export class DepositRecord implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V1}::obligation::DepositRecord`;
  static readonly $numTypeParams = 0;
  static readonly $isPhantom = [] as const;

  readonly $typeName = DepositRecord.$typeName;
  readonly $fullTypeName: `${typeof PKG_V1}::obligation::DepositRecord`;
  readonly $typeArgs: [];
  readonly $isPhantom = DepositRecord.$isPhantom;

  readonly coinType: ToField<TypeName>;
  readonly reserveArrayIndex: ToField<"u64">;
  readonly depositedCtokenAmount: ToField<"u64">;
  readonly marketValue: ToField<Decimal>;
  readonly userRewardManagerIndex: ToField<"u64">;
  readonly attributedBorrowValue: ToField<Decimal>;

  private constructor(typeArgs: [], fields: DepositRecordFields) {
    this.$fullTypeName = composeSuiType(
      DepositRecord.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V1}::obligation::DepositRecord`;
    this.$typeArgs = typeArgs;

    this.coinType = fields.coinType;
    this.reserveArrayIndex = fields.reserveArrayIndex;
    this.depositedCtokenAmount = fields.depositedCtokenAmount;
    this.marketValue = fields.marketValue;
    this.userRewardManagerIndex = fields.userRewardManagerIndex;
    this.attributedBorrowValue = fields.attributedBorrowValue;
  }

  static reified(): DepositRecordReified {
    return {
      typeName: DepositRecord.$typeName,
      fullTypeName: composeSuiType(
        DepositRecord.$typeName,
        ...[],
      ) as `${typeof PKG_V1}::obligation::DepositRecord`,
      typeArgs: [] as [],
      isPhantom: DepositRecord.$isPhantom,
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) => DepositRecord.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) => DepositRecord.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => DepositRecord.fromBcs(data),
      bcs: DepositRecord.bcs,
      fromJSONField: (field: any) => DepositRecord.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => DepositRecord.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) => DepositRecord.fromSuiParsedData(content),
      fromSuiObjectData: (content: SuiObjectData) => DepositRecord.fromSuiObjectData(content),
      fetch: async (client: SuiClient, id: string) => DepositRecord.fetch(client, id),
      new: (fields: DepositRecordFields) => {
        return new DepositRecord([], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return DepositRecord.reified();
  }

  static phantom(): PhantomReified<ToTypeStr<DepositRecord>> {
    return phantom(DepositRecord.reified());
  }
  static get p() {
    return DepositRecord.phantom();
  }

  static get bcs() {
    return bcs.struct("DepositRecord", {
      coin_type: TypeName.bcs,
      reserve_array_index: bcs.u64(),
      deposited_ctoken_amount: bcs.u64(),
      market_value: Decimal.bcs,
      user_reward_manager_index: bcs.u64(),
      attributed_borrow_value: Decimal.bcs,
    });
  }

  static fromFields(fields: Record<string, any>): DepositRecord {
    return DepositRecord.reified().new({
      coinType: decodeFromFields(TypeName.reified(), fields.coin_type),
      reserveArrayIndex: decodeFromFields("u64", fields.reserve_array_index),
      depositedCtokenAmount: decodeFromFields("u64", fields.deposited_ctoken_amount),
      marketValue: decodeFromFields(Decimal.reified(), fields.market_value),
      userRewardManagerIndex: decodeFromFields("u64", fields.user_reward_manager_index),
      attributedBorrowValue: decodeFromFields(Decimal.reified(), fields.attributed_borrow_value),
    });
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): DepositRecord {
    if (!isDepositRecord(item.type)) {
      throw new Error("not a DepositRecord type");
    }

    return DepositRecord.reified().new({
      coinType: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.coin_type),
      reserveArrayIndex: decodeFromFieldsWithTypes("u64", item.fields.reserve_array_index),
      depositedCtokenAmount: decodeFromFieldsWithTypes("u64", item.fields.deposited_ctoken_amount),
      marketValue: decodeFromFieldsWithTypes(Decimal.reified(), item.fields.market_value),
      userRewardManagerIndex: decodeFromFieldsWithTypes(
        "u64",
        item.fields.user_reward_manager_index,
      ),
      attributedBorrowValue: decodeFromFieldsWithTypes(
        Decimal.reified(),
        item.fields.attributed_borrow_value,
      ),
    });
  }

  static fromBcs(data: Uint8Array): DepositRecord {
    return DepositRecord.fromFields(DepositRecord.bcs.parse(data));
  }

  toJSONField() {
    return {
      coinType: this.coinType.toJSONField(),
      reserveArrayIndex: this.reserveArrayIndex.toString(),
      depositedCtokenAmount: this.depositedCtokenAmount.toString(),
      marketValue: this.marketValue.toJSONField(),
      userRewardManagerIndex: this.userRewardManagerIndex.toString(),
      attributedBorrowValue: this.attributedBorrowValue.toJSONField(),
    };
  }

  toJSON() {
    return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
  }

  static fromJSONField(field: any): DepositRecord {
    return DepositRecord.reified().new({
      coinType: decodeFromJSONField(TypeName.reified(), field.coinType),
      reserveArrayIndex: decodeFromJSONField("u64", field.reserveArrayIndex),
      depositedCtokenAmount: decodeFromJSONField("u64", field.depositedCtokenAmount),
      marketValue: decodeFromJSONField(Decimal.reified(), field.marketValue),
      userRewardManagerIndex: decodeFromJSONField("u64", field.userRewardManagerIndex),
      attributedBorrowValue: decodeFromJSONField(Decimal.reified(), field.attributedBorrowValue),
    });
  }

  static fromJSON(json: Record<string, any>): DepositRecord {
    if (json.$typeName !== DepositRecord.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }

    return DepositRecord.fromJSONField(json);
  }

  static fromSuiParsedData(content: SuiParsedData): DepositRecord {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isDepositRecord(content.type)) {
      throw new Error(`object at ${(content.fields as any).id} is not a DepositRecord object`);
    }
    return DepositRecord.fromFieldsWithTypes(content);
  }

  static fromSuiObjectData(data: SuiObjectData): DepositRecord {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isDepositRecord(data.bcs.type)) {
        throw new Error(`object at ${data.objectId} is not a DepositRecord object`);
      }

      return DepositRecord.fromBcs(fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return DepositRecord.fromSuiParsedData(data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch(client: SuiClient, id: string): Promise<DepositRecord> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(`error fetching DepositRecord object at id ${id}: ${res.error.code}`);
    }
    if (res.data?.bcs?.dataType !== "moveObject" || !isDepositRecord(res.data.bcs.type)) {
      throw new Error(`object at id ${id} is not a DepositRecord object`);
    }

    return DepositRecord.fromSuiObjectData(res.data);
  }
}
