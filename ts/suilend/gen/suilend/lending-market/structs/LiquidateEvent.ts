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
import {
  FieldsWithTypes,
  composeSuiType,
  compressSuiType,
} from "../../../_framework/util.js";
import { PKG_V1 } from "../../constants.js";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64, fromHex, toHex } from "@mysten/sui/utils";

export function isLiquidateEvent(type: string): boolean {
  type = compressSuiType(type);
  return type === `${PKG_V1}::lending_market::LiquidateEvent`;
}

export interface LiquidateEventFields {
  lendingMarketId: ToField<"address">;
  repayReserveId: ToField<"address">;
  withdrawReserveId: ToField<"address">;
  obligationId: ToField<"address">;
  repayCoinType: ToField<TypeName>;
  withdrawCoinType: ToField<TypeName>;
  repayAmount: ToField<"u64">;
  withdrawAmount: ToField<"u64">;
  protocolFeeAmount: ToField<"u64">;
  liquidatorBonusAmount: ToField<"u64">;
}

export type LiquidateEventReified = Reified<
  LiquidateEvent,
  LiquidateEventFields
>;

/**
 * Move struct: `LiquidateEvent`
 * Module: `f95b06141ed4a174f239417323bde3f209b972f5930d8521ea38a52aff3a6ddf::lending_market`
 */
export class LiquidateEvent implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V1}::lending_market::LiquidateEvent`;
  static readonly $numTypeParams = 0;
  static readonly $isPhantom = [] as const;

  readonly $typeName = LiquidateEvent.$typeName;
  readonly $fullTypeName: `${typeof PKG_V1}::lending_market::LiquidateEvent`;
  readonly $typeArgs: [];
  readonly $isPhantom = LiquidateEvent.$isPhantom;

  readonly lendingMarketId: ToField<"address">;
  readonly repayReserveId: ToField<"address">;
  readonly withdrawReserveId: ToField<"address">;
  readonly obligationId: ToField<"address">;
  readonly repayCoinType: ToField<TypeName>;
  readonly withdrawCoinType: ToField<TypeName>;
  readonly repayAmount: ToField<"u64">;
  readonly withdrawAmount: ToField<"u64">;
  readonly protocolFeeAmount: ToField<"u64">;
  readonly liquidatorBonusAmount: ToField<"u64">;

  private constructor(typeArgs: [], fields: LiquidateEventFields) {
    this.$fullTypeName = composeSuiType(
      LiquidateEvent.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V1}::lending_market::LiquidateEvent`;
    this.$typeArgs = typeArgs;

    this.lendingMarketId = fields.lendingMarketId;
    this.repayReserveId = fields.repayReserveId;
    this.withdrawReserveId = fields.withdrawReserveId;
    this.obligationId = fields.obligationId;
    this.repayCoinType = fields.repayCoinType;
    this.withdrawCoinType = fields.withdrawCoinType;
    this.repayAmount = fields.repayAmount;
    this.withdrawAmount = fields.withdrawAmount;
    this.protocolFeeAmount = fields.protocolFeeAmount;
    this.liquidatorBonusAmount = fields.liquidatorBonusAmount;
  }

  static reified(): LiquidateEventReified {
    return {
      typeName: LiquidateEvent.$typeName,
      fullTypeName: composeSuiType(
        LiquidateEvent.$typeName,
        ...[],
      ) as `${typeof PKG_V1}::lending_market::LiquidateEvent`,
      typeArgs: [] as [],
      isPhantom: LiquidateEvent.$isPhantom,
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) =>
        LiquidateEvent.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        LiquidateEvent.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => LiquidateEvent.fromBcs(data),
      bcs: LiquidateEvent.bcs,
      fromJSONField: (field: any) => LiquidateEvent.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => LiquidateEvent.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) =>
        LiquidateEvent.fromSuiParsedData(content),
      fromSuiObjectData: (content: SuiObjectData) =>
        LiquidateEvent.fromSuiObjectData(content),
      fetch: async (client: SuiClient, id: string) =>
        LiquidateEvent.fetch(client, id),
      new: (fields: LiquidateEventFields) => {
        return new LiquidateEvent([], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return LiquidateEvent.reified();
  }

  static phantom(): PhantomReified<ToTypeStr<LiquidateEvent>> {
    return phantom(LiquidateEvent.reified());
  }
  static get p() {
    return LiquidateEvent.phantom();
  }

  static get bcs() {
    return bcs.struct("LiquidateEvent", {
      lending_market_id: bcs.bytes(32).transform({
        input: (val: string) => fromHex(val),
        output: (val: Uint8Array) => toHex(val),
      }),
      repay_reserve_id: bcs.bytes(32).transform({
        input: (val: string) => fromHex(val),
        output: (val: Uint8Array) => toHex(val),
      }),
      withdraw_reserve_id: bcs.bytes(32).transform({
        input: (val: string) => fromHex(val),
        output: (val: Uint8Array) => toHex(val),
      }),
      obligation_id: bcs.bytes(32).transform({
        input: (val: string) => fromHex(val),
        output: (val: Uint8Array) => toHex(val),
      }),
      repay_coin_type: TypeName.bcs,
      withdraw_coin_type: TypeName.bcs,
      repay_amount: bcs.u64(),
      withdraw_amount: bcs.u64(),
      protocol_fee_amount: bcs.u64(),
      liquidator_bonus_amount: bcs.u64(),
    });
  }

  static fromFields(fields: Record<string, any>): LiquidateEvent {
    return LiquidateEvent.reified().new({
      lendingMarketId: decodeFromFields("address", fields.lending_market_id),
      repayReserveId: decodeFromFields("address", fields.repay_reserve_id),
      withdrawReserveId: decodeFromFields(
        "address",
        fields.withdraw_reserve_id,
      ),
      obligationId: decodeFromFields("address", fields.obligation_id),
      repayCoinType: decodeFromFields(
        TypeName.reified(),
        fields.repay_coin_type,
      ),
      withdrawCoinType: decodeFromFields(
        TypeName.reified(),
        fields.withdraw_coin_type,
      ),
      repayAmount: decodeFromFields("u64", fields.repay_amount),
      withdrawAmount: decodeFromFields("u64", fields.withdraw_amount),
      protocolFeeAmount: decodeFromFields("u64", fields.protocol_fee_amount),
      liquidatorBonusAmount: decodeFromFields(
        "u64",
        fields.liquidator_bonus_amount,
      ),
    });
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): LiquidateEvent {
    if (!isLiquidateEvent(item.type)) {
      throw new Error("not a LiquidateEvent type");
    }

    return LiquidateEvent.reified().new({
      lendingMarketId: decodeFromFieldsWithTypes(
        "address",
        item.fields.lending_market_id,
      ),
      repayReserveId: decodeFromFieldsWithTypes(
        "address",
        item.fields.repay_reserve_id,
      ),
      withdrawReserveId: decodeFromFieldsWithTypes(
        "address",
        item.fields.withdraw_reserve_id,
      ),
      obligationId: decodeFromFieldsWithTypes(
        "address",
        item.fields.obligation_id,
      ),
      repayCoinType: decodeFromFieldsWithTypes(
        TypeName.reified(),
        item.fields.repay_coin_type,
      ),
      withdrawCoinType: decodeFromFieldsWithTypes(
        TypeName.reified(),
        item.fields.withdraw_coin_type,
      ),
      repayAmount: decodeFromFieldsWithTypes("u64", item.fields.repay_amount),
      withdrawAmount: decodeFromFieldsWithTypes(
        "u64",
        item.fields.withdraw_amount,
      ),
      protocolFeeAmount: decodeFromFieldsWithTypes(
        "u64",
        item.fields.protocol_fee_amount,
      ),
      liquidatorBonusAmount: decodeFromFieldsWithTypes(
        "u64",
        item.fields.liquidator_bonus_amount,
      ),
    });
  }

  static fromBcs(data: Uint8Array): LiquidateEvent {
    return LiquidateEvent.fromFields(LiquidateEvent.bcs.parse(data));
  }

  toJSONField() {
    return {
      lendingMarketId: this.lendingMarketId,
      repayReserveId: this.repayReserveId,
      withdrawReserveId: this.withdrawReserveId,
      obligationId: this.obligationId,
      repayCoinType: this.repayCoinType.toJSONField(),
      withdrawCoinType: this.withdrawCoinType.toJSONField(),
      repayAmount: this.repayAmount.toString(),
      withdrawAmount: this.withdrawAmount.toString(),
      protocolFeeAmount: this.protocolFeeAmount.toString(),
      liquidatorBonusAmount: this.liquidatorBonusAmount.toString(),
    };
  }

  toJSON() {
    return {
      $typeName: this.$typeName,
      $typeArgs: this.$typeArgs,
      ...this.toJSONField(),
    };
  }

  static fromJSONField(field: any): LiquidateEvent {
    return LiquidateEvent.reified().new({
      lendingMarketId: decodeFromJSONField("address", field.lendingMarketId),
      repayReserveId: decodeFromJSONField("address", field.repayReserveId),
      withdrawReserveId: decodeFromJSONField(
        "address",
        field.withdrawReserveId,
      ),
      obligationId: decodeFromJSONField("address", field.obligationId),
      repayCoinType: decodeFromJSONField(
        TypeName.reified(),
        field.repayCoinType,
      ),
      withdrawCoinType: decodeFromJSONField(
        TypeName.reified(),
        field.withdrawCoinType,
      ),
      repayAmount: decodeFromJSONField("u64", field.repayAmount),
      withdrawAmount: decodeFromJSONField("u64", field.withdrawAmount),
      protocolFeeAmount: decodeFromJSONField("u64", field.protocolFeeAmount),
      liquidatorBonusAmount: decodeFromJSONField(
        "u64",
        field.liquidatorBonusAmount,
      ),
    });
  }

  static fromJSON(json: Record<string, any>): LiquidateEvent {
    if (json.$typeName !== LiquidateEvent.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }

    return LiquidateEvent.fromJSONField(json);
  }

  static fromSuiParsedData(content: SuiParsedData): LiquidateEvent {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isLiquidateEvent(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a LiquidateEvent object`,
      );
    }
    return LiquidateEvent.fromFieldsWithTypes(content);
  }

  static fromSuiObjectData(data: SuiObjectData): LiquidateEvent {
    if (data.bcs) {
      if (
        data.bcs.dataType !== "moveObject" ||
        !isLiquidateEvent(data.bcs.type)
      ) {
        throw new Error(`object at is not a LiquidateEvent object`);
      }

      return LiquidateEvent.fromBcs(fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return LiquidateEvent.fromSuiParsedData(data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch(client: SuiClient, id: string): Promise<LiquidateEvent> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(
        `error fetching LiquidateEvent object at id ${id}: ${res.error.code}`,
      );
    }
    if (
      res.data?.bcs?.dataType !== "moveObject" ||
      !isLiquidateEvent(res.data.bcs.type)
    ) {
      throw new Error(`object at id ${id} is not a LiquidateEvent object`);
    }

    return LiquidateEvent.fromSuiObjectData(res.data);
  }
}
