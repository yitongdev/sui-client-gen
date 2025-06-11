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
import { PKG_V1 } from "../../constants.js";
import { Decimal } from "../../decimal/structs/index.js";
import { BorrowRecord as BorrowRecord1 } from "./BorrowRecord.js";
import { DepositRecord as DepositRecord1 } from "./DepositRecord.js";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64, fromHex, toHex } from "@mysten/sui/utils";

export function isObligationDataEvent(type: string): boolean {
  type = compressSuiType(type);
  return type === `${PKG_V1}::obligation::ObligationDataEvent`;
}

export interface ObligationDataEventFields {
  lendingMarketId: ToField<"address">;
  obligationId: ToField<"address">;
  deposits: ToField<Vector<DepositRecord1>>;
  borrows: ToField<Vector<BorrowRecord1>>;
  depositedValueUsd: ToField<Decimal>;
  allowedBorrowValueUsd: ToField<Decimal>;
  unhealthyBorrowValueUsd: ToField<Decimal>;
  superUnhealthyBorrowValueUsd: ToField<Decimal>;
  unweightedBorrowedValueUsd: ToField<Decimal>;
  weightedBorrowedValueUsd: ToField<Decimal>;
  weightedBorrowedValueUpperBoundUsd: ToField<Decimal>;
  borrowingIsolatedAsset: ToField<"bool">;
  badDebtUsd: ToField<Decimal>;
  closable: ToField<"bool">;
}

export type ObligationDataEventReified = Reified<
  ObligationDataEvent,
  ObligationDataEventFields
>;

/**
 * Move struct: `ObligationDataEvent`
 * Module: `f95b06141ed4a174f239417323bde3f209b972f5930d8521ea38a52aff3a6ddf::obligation`
 */
export class ObligationDataEvent implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V1}::obligation::ObligationDataEvent`;
  static readonly $numTypeParams = 0;
  static readonly $isPhantom = [] as const;

  readonly $typeName = ObligationDataEvent.$typeName;
  readonly $fullTypeName: `${typeof PKG_V1}::obligation::ObligationDataEvent`;
  readonly $typeArgs: [];
  readonly $isPhantom = ObligationDataEvent.$isPhantom;

  readonly lendingMarketId: ToField<"address">;
  readonly obligationId: ToField<"address">;
  readonly deposits: ToField<Vector<DepositRecord1>>;
  readonly borrows: ToField<Vector<BorrowRecord1>>;
  readonly depositedValueUsd: ToField<Decimal>;
  readonly allowedBorrowValueUsd: ToField<Decimal>;
  readonly unhealthyBorrowValueUsd: ToField<Decimal>;
  readonly superUnhealthyBorrowValueUsd: ToField<Decimal>;
  readonly unweightedBorrowedValueUsd: ToField<Decimal>;
  readonly weightedBorrowedValueUsd: ToField<Decimal>;
  readonly weightedBorrowedValueUpperBoundUsd: ToField<Decimal>;
  readonly borrowingIsolatedAsset: ToField<"bool">;
  readonly badDebtUsd: ToField<Decimal>;
  readonly closable: ToField<"bool">;

  private constructor(typeArgs: [], fields: ObligationDataEventFields) {
    this.$fullTypeName = composeSuiType(
      ObligationDataEvent.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V1}::obligation::ObligationDataEvent`;
    this.$typeArgs = typeArgs;

    this.lendingMarketId = fields.lendingMarketId;
    this.obligationId = fields.obligationId;
    this.deposits = fields.deposits;
    this.borrows = fields.borrows;
    this.depositedValueUsd = fields.depositedValueUsd;
    this.allowedBorrowValueUsd = fields.allowedBorrowValueUsd;
    this.unhealthyBorrowValueUsd = fields.unhealthyBorrowValueUsd;
    this.superUnhealthyBorrowValueUsd = fields.superUnhealthyBorrowValueUsd;
    this.unweightedBorrowedValueUsd = fields.unweightedBorrowedValueUsd;
    this.weightedBorrowedValueUsd = fields.weightedBorrowedValueUsd;
    this.weightedBorrowedValueUpperBoundUsd =
      fields.weightedBorrowedValueUpperBoundUsd;
    this.borrowingIsolatedAsset = fields.borrowingIsolatedAsset;
    this.badDebtUsd = fields.badDebtUsd;
    this.closable = fields.closable;
  }

  static reified(): ObligationDataEventReified {
    return {
      typeName: ObligationDataEvent.$typeName,
      fullTypeName: composeSuiType(
        ObligationDataEvent.$typeName,
        ...[],
      ) as `${typeof PKG_V1}::obligation::ObligationDataEvent`,
      typeArgs: [] as [],
      isPhantom: ObligationDataEvent.$isPhantom,
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) =>
        ObligationDataEvent.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        ObligationDataEvent.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => ObligationDataEvent.fromBcs(data),
      bcs: ObligationDataEvent.bcs,
      fromJSONField: (field: any) => ObligationDataEvent.fromJSONField(field),
      fromJSON: (json: Record<string, any>) =>
        ObligationDataEvent.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) =>
        ObligationDataEvent.fromSuiParsedData(content),
      fromSuiObjectData: (content: SuiObjectData) =>
        ObligationDataEvent.fromSuiObjectData(content),
      fetch: async (client: SuiClient, id: string) =>
        ObligationDataEvent.fetch(client, id),
      new: (fields: ObligationDataEventFields) => {
        return new ObligationDataEvent([], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return ObligationDataEvent.reified();
  }

  static phantom(): PhantomReified<ToTypeStr<ObligationDataEvent>> {
    return phantom(ObligationDataEvent.reified());
  }
  static get p() {
    return ObligationDataEvent.phantom();
  }

  static get bcs() {
    return bcs.struct("ObligationDataEvent", {
      lending_market_id: bcs.bytes(32).transform({
        input: (val: string) => fromHex(val),
        output: (val: Uint8Array) => toHex(val),
      }),
      obligation_id: bcs.bytes(32).transform({
        input: (val: string) => fromHex(val),
        output: (val: Uint8Array) => toHex(val),
      }),
      deposits: bcs.vector(DepositRecord1.bcs),
      borrows: bcs.vector(BorrowRecord1.bcs),
      deposited_value_usd: Decimal.bcs,
      allowed_borrow_value_usd: Decimal.bcs,
      unhealthy_borrow_value_usd: Decimal.bcs,
      super_unhealthy_borrow_value_usd: Decimal.bcs,
      unweighted_borrowed_value_usd: Decimal.bcs,
      weighted_borrowed_value_usd: Decimal.bcs,
      weighted_borrowed_value_upper_bound_usd: Decimal.bcs,
      borrowing_isolated_asset: bcs.bool(),
      bad_debt_usd: Decimal.bcs,
      closable: bcs.bool(),
    });
  }

  static fromFields(fields: Record<string, any>): ObligationDataEvent {
    return ObligationDataEvent.reified().new({
      lendingMarketId: decodeFromFields("address", fields.lending_market_id),
      obligationId: decodeFromFields("address", fields.obligation_id),
      deposits: decodeFromFields(
        reified.vector(DepositRecord1.reified()),
        fields.deposits,
      ),
      borrows: decodeFromFields(
        reified.vector(BorrowRecord1.reified()),
        fields.borrows,
      ),
      depositedValueUsd: decodeFromFields(
        Decimal.reified(),
        fields.deposited_value_usd,
      ),
      allowedBorrowValueUsd: decodeFromFields(
        Decimal.reified(),
        fields.allowed_borrow_value_usd,
      ),
      unhealthyBorrowValueUsd: decodeFromFields(
        Decimal.reified(),
        fields.unhealthy_borrow_value_usd,
      ),
      superUnhealthyBorrowValueUsd: decodeFromFields(
        Decimal.reified(),
        fields.super_unhealthy_borrow_value_usd,
      ),
      unweightedBorrowedValueUsd: decodeFromFields(
        Decimal.reified(),
        fields.unweighted_borrowed_value_usd,
      ),
      weightedBorrowedValueUsd: decodeFromFields(
        Decimal.reified(),
        fields.weighted_borrowed_value_usd,
      ),
      weightedBorrowedValueUpperBoundUsd: decodeFromFields(
        Decimal.reified(),
        fields.weighted_borrowed_value_upper_bound_usd,
      ),
      borrowingIsolatedAsset: decodeFromFields(
        "bool",
        fields.borrowing_isolated_asset,
      ),
      badDebtUsd: decodeFromFields(Decimal.reified(), fields.bad_debt_usd),
      closable: decodeFromFields("bool", fields.closable),
    });
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): ObligationDataEvent {
    if (!isObligationDataEvent(item.type)) {
      throw new Error("not a ObligationDataEvent type");
    }

    return ObligationDataEvent.reified().new({
      lendingMarketId: decodeFromFieldsWithTypes(
        "address",
        item.fields.lending_market_id,
      ),
      obligationId: decodeFromFieldsWithTypes(
        "address",
        item.fields.obligation_id,
      ),
      deposits: decodeFromFieldsWithTypes(
        reified.vector(DepositRecord1.reified()),
        item.fields.deposits,
      ),
      borrows: decodeFromFieldsWithTypes(
        reified.vector(BorrowRecord1.reified()),
        item.fields.borrows,
      ),
      depositedValueUsd: decodeFromFieldsWithTypes(
        Decimal.reified(),
        item.fields.deposited_value_usd,
      ),
      allowedBorrowValueUsd: decodeFromFieldsWithTypes(
        Decimal.reified(),
        item.fields.allowed_borrow_value_usd,
      ),
      unhealthyBorrowValueUsd: decodeFromFieldsWithTypes(
        Decimal.reified(),
        item.fields.unhealthy_borrow_value_usd,
      ),
      superUnhealthyBorrowValueUsd: decodeFromFieldsWithTypes(
        Decimal.reified(),
        item.fields.super_unhealthy_borrow_value_usd,
      ),
      unweightedBorrowedValueUsd: decodeFromFieldsWithTypes(
        Decimal.reified(),
        item.fields.unweighted_borrowed_value_usd,
      ),
      weightedBorrowedValueUsd: decodeFromFieldsWithTypes(
        Decimal.reified(),
        item.fields.weighted_borrowed_value_usd,
      ),
      weightedBorrowedValueUpperBoundUsd: decodeFromFieldsWithTypes(
        Decimal.reified(),
        item.fields.weighted_borrowed_value_upper_bound_usd,
      ),
      borrowingIsolatedAsset: decodeFromFieldsWithTypes(
        "bool",
        item.fields.borrowing_isolated_asset,
      ),
      badDebtUsd: decodeFromFieldsWithTypes(
        Decimal.reified(),
        item.fields.bad_debt_usd,
      ),
      closable: decodeFromFieldsWithTypes("bool", item.fields.closable),
    });
  }

  static fromBcs(data: Uint8Array): ObligationDataEvent {
    return ObligationDataEvent.fromFields(ObligationDataEvent.bcs.parse(data));
  }

  toJSONField() {
    return {
      lendingMarketId: this.lendingMarketId,
      obligationId: this.obligationId,
      deposits: fieldToJSON<Vector<DepositRecord1>>(
        `vector<${DepositRecord1.$typeName}>`,
        this.deposits,
      ),
      borrows: fieldToJSON<Vector<BorrowRecord1>>(
        `vector<${BorrowRecord1.$typeName}>`,
        this.borrows,
      ),
      depositedValueUsd: this.depositedValueUsd.toJSONField(),
      allowedBorrowValueUsd: this.allowedBorrowValueUsd.toJSONField(),
      unhealthyBorrowValueUsd: this.unhealthyBorrowValueUsd.toJSONField(),
      superUnhealthyBorrowValueUsd:
        this.superUnhealthyBorrowValueUsd.toJSONField(),
      unweightedBorrowedValueUsd: this.unweightedBorrowedValueUsd.toJSONField(),
      weightedBorrowedValueUsd: this.weightedBorrowedValueUsd.toJSONField(),
      weightedBorrowedValueUpperBoundUsd:
        this.weightedBorrowedValueUpperBoundUsd.toJSONField(),
      borrowingIsolatedAsset: this.borrowingIsolatedAsset,
      badDebtUsd: this.badDebtUsd.toJSONField(),
      closable: this.closable,
    };
  }

  toJSON() {
    return {
      $typeName: this.$typeName,
      $typeArgs: this.$typeArgs,
      ...this.toJSONField(),
    };
  }

  static fromJSONField(field: any): ObligationDataEvent {
    return ObligationDataEvent.reified().new({
      lendingMarketId: decodeFromJSONField("address", field.lendingMarketId),
      obligationId: decodeFromJSONField("address", field.obligationId),
      deposits: decodeFromJSONField(
        reified.vector(DepositRecord1.reified()),
        field.deposits,
      ),
      borrows: decodeFromJSONField(
        reified.vector(BorrowRecord1.reified()),
        field.borrows,
      ),
      depositedValueUsd: decodeFromJSONField(
        Decimal.reified(),
        field.depositedValueUsd,
      ),
      allowedBorrowValueUsd: decodeFromJSONField(
        Decimal.reified(),
        field.allowedBorrowValueUsd,
      ),
      unhealthyBorrowValueUsd: decodeFromJSONField(
        Decimal.reified(),
        field.unhealthyBorrowValueUsd,
      ),
      superUnhealthyBorrowValueUsd: decodeFromJSONField(
        Decimal.reified(),
        field.superUnhealthyBorrowValueUsd,
      ),
      unweightedBorrowedValueUsd: decodeFromJSONField(
        Decimal.reified(),
        field.unweightedBorrowedValueUsd,
      ),
      weightedBorrowedValueUsd: decodeFromJSONField(
        Decimal.reified(),
        field.weightedBorrowedValueUsd,
      ),
      weightedBorrowedValueUpperBoundUsd: decodeFromJSONField(
        Decimal.reified(),
        field.weightedBorrowedValueUpperBoundUsd,
      ),
      borrowingIsolatedAsset: decodeFromJSONField(
        "bool",
        field.borrowingIsolatedAsset,
      ),
      badDebtUsd: decodeFromJSONField(Decimal.reified(), field.badDebtUsd),
      closable: decodeFromJSONField("bool", field.closable),
    });
  }

  static fromJSON(json: Record<string, any>): ObligationDataEvent {
    if (json.$typeName !== ObligationDataEvent.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }

    return ObligationDataEvent.fromJSONField(json);
  }

  static fromSuiParsedData(content: SuiParsedData): ObligationDataEvent {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isObligationDataEvent(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a ObligationDataEvent object`,
      );
    }
    return ObligationDataEvent.fromFieldsWithTypes(content);
  }

  static fromSuiObjectData(data: SuiObjectData): ObligationDataEvent {
    if (data.bcs) {
      if (
        data.bcs.dataType !== "moveObject" ||
        !isObligationDataEvent(data.bcs.type)
      ) {
        throw new Error(`object at is not a ObligationDataEvent object`);
      }

      return ObligationDataEvent.fromBcs(fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return ObligationDataEvent.fromSuiParsedData(data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch(
    client: SuiClient,
    id: string,
  ): Promise<ObligationDataEvent> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(
        `error fetching ObligationDataEvent object at id ${id}: ${res.error.code}`,
      );
    }
    if (
      res.data?.bcs?.dataType !== "moveObject" ||
      !isObligationDataEvent(res.data.bcs.type)
    ) {
      throw new Error(`object at id ${id} is not a ObligationDataEvent object`);
    }

    return ObligationDataEvent.fromSuiObjectData(res.data);
  }
}
