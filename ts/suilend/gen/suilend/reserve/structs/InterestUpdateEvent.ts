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
import { Decimal } from "../../decimal/structs/index.js";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64, fromHex, toHex } from "@mysten/sui/utils";

export function isInterestUpdateEvent(type: string): boolean {
  type = compressSuiType(type);
  return type === `${PKG_V1}::reserve::InterestUpdateEvent`;
}

export interface InterestUpdateEventFields {
  lendingMarketId: ToField<"address">;
  coinType: ToField<TypeName>;
  reserveId: ToField<"address">;
  cumulativeBorrowRate: ToField<Decimal>;
  availableAmount: ToField<"u64">;
  borrowedAmount: ToField<Decimal>;
  unclaimedSpreadFees: ToField<Decimal>;
  ctokenSupply: ToField<"u64">;
  borrowInterestPaid: ToField<Decimal>;
  spreadFee: ToField<Decimal>;
  supplyInterestEarned: ToField<Decimal>;
  borrowInterestPaidUsdEstimate: ToField<Decimal>;
  protocolFeeUsdEstimate: ToField<Decimal>;
  supplyInterestEarnedUsdEstimate: ToField<Decimal>;
}

export type InterestUpdateEventReified = Reified<
  InterestUpdateEvent,
  InterestUpdateEventFields
>;

/**
 * Move struct: `InterestUpdateEvent`
 * Module: `f95b06141ed4a174f239417323bde3f209b972f5930d8521ea38a52aff3a6ddf::reserve`
 */
export class InterestUpdateEvent implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V1}::reserve::InterestUpdateEvent`;
  static readonly $numTypeParams = 0;
  static readonly $isPhantom = [] as const;

  readonly $typeName = InterestUpdateEvent.$typeName;
  readonly $fullTypeName: `${typeof PKG_V1}::reserve::InterestUpdateEvent`;
  readonly $typeArgs: [];
  readonly $isPhantom = InterestUpdateEvent.$isPhantom;

  readonly lendingMarketId: ToField<"address">;
  readonly coinType: ToField<TypeName>;
  readonly reserveId: ToField<"address">;
  readonly cumulativeBorrowRate: ToField<Decimal>;
  readonly availableAmount: ToField<"u64">;
  readonly borrowedAmount: ToField<Decimal>;
  readonly unclaimedSpreadFees: ToField<Decimal>;
  readonly ctokenSupply: ToField<"u64">;
  readonly borrowInterestPaid: ToField<Decimal>;
  readonly spreadFee: ToField<Decimal>;
  readonly supplyInterestEarned: ToField<Decimal>;
  readonly borrowInterestPaidUsdEstimate: ToField<Decimal>;
  readonly protocolFeeUsdEstimate: ToField<Decimal>;
  readonly supplyInterestEarnedUsdEstimate: ToField<Decimal>;

  private constructor(typeArgs: [], fields: InterestUpdateEventFields) {
    this.$fullTypeName = composeSuiType(
      InterestUpdateEvent.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V1}::reserve::InterestUpdateEvent`;
    this.$typeArgs = typeArgs;

    this.lendingMarketId = fields.lendingMarketId;
    this.coinType = fields.coinType;
    this.reserveId = fields.reserveId;
    this.cumulativeBorrowRate = fields.cumulativeBorrowRate;
    this.availableAmount = fields.availableAmount;
    this.borrowedAmount = fields.borrowedAmount;
    this.unclaimedSpreadFees = fields.unclaimedSpreadFees;
    this.ctokenSupply = fields.ctokenSupply;
    this.borrowInterestPaid = fields.borrowInterestPaid;
    this.spreadFee = fields.spreadFee;
    this.supplyInterestEarned = fields.supplyInterestEarned;
    this.borrowInterestPaidUsdEstimate = fields.borrowInterestPaidUsdEstimate;
    this.protocolFeeUsdEstimate = fields.protocolFeeUsdEstimate;
    this.supplyInterestEarnedUsdEstimate =
      fields.supplyInterestEarnedUsdEstimate;
  }

  static reified(): InterestUpdateEventReified {
    return {
      typeName: InterestUpdateEvent.$typeName,
      fullTypeName: composeSuiType(
        InterestUpdateEvent.$typeName,
        ...[],
      ) as `${typeof PKG_V1}::reserve::InterestUpdateEvent`,
      typeArgs: [] as [],
      isPhantom: InterestUpdateEvent.$isPhantom,
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) =>
        InterestUpdateEvent.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        InterestUpdateEvent.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => InterestUpdateEvent.fromBcs(data),
      bcs: InterestUpdateEvent.bcs,
      fromJSONField: (field: any) => InterestUpdateEvent.fromJSONField(field),
      fromJSON: (json: Record<string, any>) =>
        InterestUpdateEvent.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) =>
        InterestUpdateEvent.fromSuiParsedData(content),
      fromSuiObjectData: (content: SuiObjectData) =>
        InterestUpdateEvent.fromSuiObjectData(content),
      fetch: async (client: SuiClient, id: string) =>
        InterestUpdateEvent.fetch(client, id),
      new: (fields: InterestUpdateEventFields) => {
        return new InterestUpdateEvent([], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return InterestUpdateEvent.reified();
  }

  static phantom(): PhantomReified<ToTypeStr<InterestUpdateEvent>> {
    return phantom(InterestUpdateEvent.reified());
  }
  static get p() {
    return InterestUpdateEvent.phantom();
  }

  static get bcs() {
    return bcs.struct("InterestUpdateEvent", {
      lending_market_id: bcs.bytes(32).transform({
        input: (val: string) => fromHex(val),
        output: (val: Uint8Array) => toHex(val),
      }),
      coin_type: TypeName.bcs,
      reserve_id: bcs.bytes(32).transform({
        input: (val: string) => fromHex(val),
        output: (val: Uint8Array) => toHex(val),
      }),
      cumulative_borrow_rate: Decimal.bcs,
      available_amount: bcs.u64(),
      borrowed_amount: Decimal.bcs,
      unclaimed_spread_fees: Decimal.bcs,
      ctoken_supply: bcs.u64(),
      borrow_interest_paid: Decimal.bcs,
      spread_fee: Decimal.bcs,
      supply_interest_earned: Decimal.bcs,
      borrow_interest_paid_usd_estimate: Decimal.bcs,
      protocol_fee_usd_estimate: Decimal.bcs,
      supply_interest_earned_usd_estimate: Decimal.bcs,
    });
  }

  static fromFields(fields: Record<string, any>): InterestUpdateEvent {
    return InterestUpdateEvent.reified().new({
      lendingMarketId: decodeFromFields("address", fields.lending_market_id),
      coinType: decodeFromFields(TypeName.reified(), fields.coin_type),
      reserveId: decodeFromFields("address", fields.reserve_id),
      cumulativeBorrowRate: decodeFromFields(
        Decimal.reified(),
        fields.cumulative_borrow_rate,
      ),
      availableAmount: decodeFromFields("u64", fields.available_amount),
      borrowedAmount: decodeFromFields(
        Decimal.reified(),
        fields.borrowed_amount,
      ),
      unclaimedSpreadFees: decodeFromFields(
        Decimal.reified(),
        fields.unclaimed_spread_fees,
      ),
      ctokenSupply: decodeFromFields("u64", fields.ctoken_supply),
      borrowInterestPaid: decodeFromFields(
        Decimal.reified(),
        fields.borrow_interest_paid,
      ),
      spreadFee: decodeFromFields(Decimal.reified(), fields.spread_fee),
      supplyInterestEarned: decodeFromFields(
        Decimal.reified(),
        fields.supply_interest_earned,
      ),
      borrowInterestPaidUsdEstimate: decodeFromFields(
        Decimal.reified(),
        fields.borrow_interest_paid_usd_estimate,
      ),
      protocolFeeUsdEstimate: decodeFromFields(
        Decimal.reified(),
        fields.protocol_fee_usd_estimate,
      ),
      supplyInterestEarnedUsdEstimate: decodeFromFields(
        Decimal.reified(),
        fields.supply_interest_earned_usd_estimate,
      ),
    });
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): InterestUpdateEvent {
    if (!isInterestUpdateEvent(item.type)) {
      throw new Error("not a InterestUpdateEvent type");
    }

    return InterestUpdateEvent.reified().new({
      lendingMarketId: decodeFromFieldsWithTypes(
        "address",
        item.fields.lending_market_id,
      ),
      coinType: decodeFromFieldsWithTypes(
        TypeName.reified(),
        item.fields.coin_type,
      ),
      reserveId: decodeFromFieldsWithTypes("address", item.fields.reserve_id),
      cumulativeBorrowRate: decodeFromFieldsWithTypes(
        Decimal.reified(),
        item.fields.cumulative_borrow_rate,
      ),
      availableAmount: decodeFromFieldsWithTypes(
        "u64",
        item.fields.available_amount,
      ),
      borrowedAmount: decodeFromFieldsWithTypes(
        Decimal.reified(),
        item.fields.borrowed_amount,
      ),
      unclaimedSpreadFees: decodeFromFieldsWithTypes(
        Decimal.reified(),
        item.fields.unclaimed_spread_fees,
      ),
      ctokenSupply: decodeFromFieldsWithTypes("u64", item.fields.ctoken_supply),
      borrowInterestPaid: decodeFromFieldsWithTypes(
        Decimal.reified(),
        item.fields.borrow_interest_paid,
      ),
      spreadFee: decodeFromFieldsWithTypes(
        Decimal.reified(),
        item.fields.spread_fee,
      ),
      supplyInterestEarned: decodeFromFieldsWithTypes(
        Decimal.reified(),
        item.fields.supply_interest_earned,
      ),
      borrowInterestPaidUsdEstimate: decodeFromFieldsWithTypes(
        Decimal.reified(),
        item.fields.borrow_interest_paid_usd_estimate,
      ),
      protocolFeeUsdEstimate: decodeFromFieldsWithTypes(
        Decimal.reified(),
        item.fields.protocol_fee_usd_estimate,
      ),
      supplyInterestEarnedUsdEstimate: decodeFromFieldsWithTypes(
        Decimal.reified(),
        item.fields.supply_interest_earned_usd_estimate,
      ),
    });
  }

  static fromBcs(data: Uint8Array): InterestUpdateEvent {
    return InterestUpdateEvent.fromFields(InterestUpdateEvent.bcs.parse(data));
  }

  toJSONField() {
    return {
      lendingMarketId: this.lendingMarketId,
      coinType: this.coinType.toJSONField(),
      reserveId: this.reserveId,
      cumulativeBorrowRate: this.cumulativeBorrowRate.toJSONField(),
      availableAmount: this.availableAmount.toString(),
      borrowedAmount: this.borrowedAmount.toJSONField(),
      unclaimedSpreadFees: this.unclaimedSpreadFees.toJSONField(),
      ctokenSupply: this.ctokenSupply.toString(),
      borrowInterestPaid: this.borrowInterestPaid.toJSONField(),
      spreadFee: this.spreadFee.toJSONField(),
      supplyInterestEarned: this.supplyInterestEarned.toJSONField(),
      borrowInterestPaidUsdEstimate:
        this.borrowInterestPaidUsdEstimate.toJSONField(),
      protocolFeeUsdEstimate: this.protocolFeeUsdEstimate.toJSONField(),
      supplyInterestEarnedUsdEstimate:
        this.supplyInterestEarnedUsdEstimate.toJSONField(),
    };
  }

  toJSON() {
    return {
      $typeName: this.$typeName,
      $typeArgs: this.$typeArgs,
      ...this.toJSONField(),
    };
  }

  static fromJSONField(field: any): InterestUpdateEvent {
    return InterestUpdateEvent.reified().new({
      lendingMarketId: decodeFromJSONField("address", field.lendingMarketId),
      coinType: decodeFromJSONField(TypeName.reified(), field.coinType),
      reserveId: decodeFromJSONField("address", field.reserveId),
      cumulativeBorrowRate: decodeFromJSONField(
        Decimal.reified(),
        field.cumulativeBorrowRate,
      ),
      availableAmount: decodeFromJSONField("u64", field.availableAmount),
      borrowedAmount: decodeFromJSONField(
        Decimal.reified(),
        field.borrowedAmount,
      ),
      unclaimedSpreadFees: decodeFromJSONField(
        Decimal.reified(),
        field.unclaimedSpreadFees,
      ),
      ctokenSupply: decodeFromJSONField("u64", field.ctokenSupply),
      borrowInterestPaid: decodeFromJSONField(
        Decimal.reified(),
        field.borrowInterestPaid,
      ),
      spreadFee: decodeFromJSONField(Decimal.reified(), field.spreadFee),
      supplyInterestEarned: decodeFromJSONField(
        Decimal.reified(),
        field.supplyInterestEarned,
      ),
      borrowInterestPaidUsdEstimate: decodeFromJSONField(
        Decimal.reified(),
        field.borrowInterestPaidUsdEstimate,
      ),
      protocolFeeUsdEstimate: decodeFromJSONField(
        Decimal.reified(),
        field.protocolFeeUsdEstimate,
      ),
      supplyInterestEarnedUsdEstimate: decodeFromJSONField(
        Decimal.reified(),
        field.supplyInterestEarnedUsdEstimate,
      ),
    });
  }

  static fromJSON(json: Record<string, any>): InterestUpdateEvent {
    if (json.$typeName !== InterestUpdateEvent.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }

    return InterestUpdateEvent.fromJSONField(json);
  }

  static fromSuiParsedData(content: SuiParsedData): InterestUpdateEvent {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isInterestUpdateEvent(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a InterestUpdateEvent object`,
      );
    }
    return InterestUpdateEvent.fromFieldsWithTypes(content);
  }

  static fromSuiObjectData(data: SuiObjectData): InterestUpdateEvent {
    if (data.bcs) {
      if (
        data.bcs.dataType !== "moveObject" ||
        !isInterestUpdateEvent(data.bcs.type)
      ) {
        throw new Error(`object at is not a InterestUpdateEvent object`);
      }

      return InterestUpdateEvent.fromBcs(fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return InterestUpdateEvent.fromSuiParsedData(data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch(
    client: SuiClient,
    id: string,
  ): Promise<InterestUpdateEvent> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(
        `error fetching InterestUpdateEvent object at id ${id}: ${res.error.code}`,
      );
    }
    if (
      res.data?.bcs?.dataType !== "moveObject" ||
      !isInterestUpdateEvent(res.data.bcs.type)
    ) {
      throw new Error(`object at id ${id} is not a InterestUpdateEvent object`);
    }

    return InterestUpdateEvent.fromSuiObjectData(res.data);
  }
}
