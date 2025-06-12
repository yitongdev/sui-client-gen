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

export function isDeposit(type: string): boolean {
  type = compressSuiType(type);
  return type === `${PKG_V1}::obligation::Deposit`;
}

export interface DepositFields {
  coinType: ToField<TypeName>;
  reserveArrayIndex: ToField<"u64">;
  depositedCtokenAmount: ToField<"u64">;
  marketValue: ToField<Decimal>;
  userRewardManagerIndex: ToField<"u64">;
  attributedBorrowValue: ToField<Decimal>;
}

export type DepositReified = Reified<Deposit, DepositFields>;

/**
 * Move struct: `Deposit`
 * Module: `f95b06141ed4a174f239417323bde3f209b972f5930d8521ea38a52aff3a6ddf::obligation`
 */
export class Deposit implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V1}::obligation::Deposit`;
  static readonly $numTypeParams = 0;
  static readonly $isPhantom = [] as const;

  readonly $typeName = Deposit.$typeName;
  readonly $fullTypeName: `${typeof PKG_V1}::obligation::Deposit`;
  readonly $typeArgs: [];
  readonly $isPhantom = Deposit.$isPhantom;

  readonly coinType: ToField<TypeName>;
  readonly reserveArrayIndex: ToField<"u64">;
  readonly depositedCtokenAmount: ToField<"u64">;
  readonly marketValue: ToField<Decimal>;
  readonly userRewardManagerIndex: ToField<"u64">;
  readonly attributedBorrowValue: ToField<Decimal>;

  private constructor(typeArgs: [], fields: DepositFields) {
    this.$fullTypeName = composeSuiType(
      Deposit.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V1}::obligation::Deposit`;
    this.$typeArgs = typeArgs;

    this.coinType = fields.coinType;
    this.reserveArrayIndex = fields.reserveArrayIndex;
    this.depositedCtokenAmount = fields.depositedCtokenAmount;
    this.marketValue = fields.marketValue;
    this.userRewardManagerIndex = fields.userRewardManagerIndex;
    this.attributedBorrowValue = fields.attributedBorrowValue;
  }

  static reified(): DepositReified {
    return {
      typeName: Deposit.$typeName,
      fullTypeName: composeSuiType(
        Deposit.$typeName,
        ...[],
      ) as `${typeof PKG_V1}::obligation::Deposit`,
      typeArgs: [] as [],
      isPhantom: Deposit.$isPhantom,
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) => Deposit.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) => Deposit.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => Deposit.fromBcs(data),
      bcs: Deposit.bcs,
      fromJSONField: (field: any) => Deposit.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => Deposit.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) => Deposit.fromSuiParsedData(content),
      fromSuiObjectData: (content: SuiObjectData) => Deposit.fromSuiObjectData(content),
      fetch: async (client: SuiClient, id: string) => Deposit.fetch(client, id),
      new: (fields: DepositFields) => {
        return new Deposit([], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return Deposit.reified();
  }

  static phantom(): PhantomReified<ToTypeStr<Deposit>> {
    return phantom(Deposit.reified());
  }
  static get p() {
    return Deposit.phantom();
  }

  static get bcs() {
    return bcs.struct("Deposit", {
      coin_type: TypeName.bcs,
      reserve_array_index: bcs.u64(),
      deposited_ctoken_amount: bcs.u64(),
      market_value: Decimal.bcs,
      user_reward_manager_index: bcs.u64(),
      attributed_borrow_value: Decimal.bcs,
    });
  }

  static fromFields(fields: Record<string, any>): Deposit {
    return Deposit.reified().new({
      coinType: decodeFromFields(TypeName.reified(), fields.coin_type),
      reserveArrayIndex: decodeFromFields("u64", fields.reserve_array_index),
      depositedCtokenAmount: decodeFromFields("u64", fields.deposited_ctoken_amount),
      marketValue: decodeFromFields(Decimal.reified(), fields.market_value),
      userRewardManagerIndex: decodeFromFields("u64", fields.user_reward_manager_index),
      attributedBorrowValue: decodeFromFields(Decimal.reified(), fields.attributed_borrow_value),
    });
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): Deposit {
    if (!isDeposit(item.type)) {
      throw new Error("not a Deposit type");
    }

    return Deposit.reified().new({
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

  static fromBcs(data: Uint8Array): Deposit {
    return Deposit.fromFields(Deposit.bcs.parse(data));
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

  static fromJSONField(field: any): Deposit {
    return Deposit.reified().new({
      coinType: decodeFromJSONField(TypeName.reified(), field.coinType),
      reserveArrayIndex: decodeFromJSONField("u64", field.reserveArrayIndex),
      depositedCtokenAmount: decodeFromJSONField("u64", field.depositedCtokenAmount),
      marketValue: decodeFromJSONField(Decimal.reified(), field.marketValue),
      userRewardManagerIndex: decodeFromJSONField("u64", field.userRewardManagerIndex),
      attributedBorrowValue: decodeFromJSONField(Decimal.reified(), field.attributedBorrowValue),
    });
  }

  static fromJSON(json: Record<string, any>): Deposit {
    if (json.$typeName !== Deposit.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }

    return Deposit.fromJSONField(json);
  }

  static fromSuiParsedData(content: SuiParsedData): Deposit {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isDeposit(content.type)) {
      throw new Error(`object at ${(content.fields as any).id} is not a Deposit object`);
    }
    return Deposit.fromFieldsWithTypes(content);
  }

  static fromSuiObjectData(data: SuiObjectData): Deposit {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isDeposit(data.bcs.type)) {
        throw new Error(`object at ${data.objectId} is not a Deposit object`);
      }

      return Deposit.fromBcs(fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return Deposit.fromSuiParsedData(data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch(client: SuiClient, id: string): Promise<Deposit> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(`error fetching Deposit object at id ${id}: ${res.error.code}`);
    }
    if (res.data?.bcs?.dataType !== "moveObject" || !isDeposit(res.data.bcs.type)) {
      throw new Error(`object at id ${id} is not a Deposit object`);
    }

    return Deposit.fromSuiObjectData(res.data);
  }
}
