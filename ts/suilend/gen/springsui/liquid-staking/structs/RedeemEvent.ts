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
import { fromBase64 } from "@mysten/sui/utils";

export function isRedeemEvent(type: string): boolean {
  type = compressSuiType(type);
  return type === `${PKG_V1}::liquid_staking::RedeemEvent`;
}

export interface RedeemEventFields {
  typename: ToField<TypeName>;
  lstAmountIn: ToField<"u64">;
  suiAmountOut: ToField<"u64">;
  feeAmount: ToField<"u64">;
}

export type RedeemEventReified = Reified<RedeemEvent, RedeemEventFields>;

/**
 * Move struct: `RedeemEvent`
 * Module: `b0575765166030556a6eafd3b1b970eba8183ff748860680245b9edd41c716e7::liquid_staking`
 */
export class RedeemEvent implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V1}::liquid_staking::RedeemEvent`;
  static readonly $numTypeParams = 0;
  static readonly $isPhantom = [] as const;

  readonly $typeName = RedeemEvent.$typeName;
  readonly $fullTypeName: `${typeof PKG_V1}::liquid_staking::RedeemEvent`;
  readonly $typeArgs: [];
  readonly $isPhantom = RedeemEvent.$isPhantom;

  readonly typename: ToField<TypeName>;
  readonly lstAmountIn: ToField<"u64">;
  readonly suiAmountOut: ToField<"u64">;
  readonly feeAmount: ToField<"u64">;

  private constructor(typeArgs: [], fields: RedeemEventFields) {
    this.$fullTypeName = composeSuiType(
      RedeemEvent.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V1}::liquid_staking::RedeemEvent`;
    this.$typeArgs = typeArgs;

    this.typename = fields.typename;
    this.lstAmountIn = fields.lstAmountIn;
    this.suiAmountOut = fields.suiAmountOut;
    this.feeAmount = fields.feeAmount;
  }

  static reified(): RedeemEventReified {
    return {
      typeName: RedeemEvent.$typeName,
      fullTypeName: composeSuiType(
        RedeemEvent.$typeName,
        ...[],
      ) as `${typeof PKG_V1}::liquid_staking::RedeemEvent`,
      typeArgs: [] as [],
      isPhantom: RedeemEvent.$isPhantom,
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) =>
        RedeemEvent.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        RedeemEvent.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => RedeemEvent.fromBcs(data),
      bcs: RedeemEvent.bcs,
      fromJSONField: (field: any) => RedeemEvent.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => RedeemEvent.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) =>
        RedeemEvent.fromSuiParsedData(content),
      fromSuiObjectData: (content: SuiObjectData) =>
        RedeemEvent.fromSuiObjectData(content),
      fetch: async (client: SuiClient, id: string) =>
        RedeemEvent.fetch(client, id),
      new: (fields: RedeemEventFields) => {
        return new RedeemEvent([], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return RedeemEvent.reified();
  }

  static phantom(): PhantomReified<ToTypeStr<RedeemEvent>> {
    return phantom(RedeemEvent.reified());
  }
  static get p() {
    return RedeemEvent.phantom();
  }

  static get bcs() {
    return bcs.struct("RedeemEvent", {
      typename: TypeName.bcs,
      lst_amount_in: bcs.u64(),
      sui_amount_out: bcs.u64(),
      fee_amount: bcs.u64(),
    });
  }

  static fromFields(fields: Record<string, any>): RedeemEvent {
    return RedeemEvent.reified().new({
      typename: decodeFromFields(TypeName.reified(), fields.typename),
      lstAmountIn: decodeFromFields("u64", fields.lst_amount_in),
      suiAmountOut: decodeFromFields("u64", fields.sui_amount_out),
      feeAmount: decodeFromFields("u64", fields.fee_amount),
    });
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): RedeemEvent {
    if (!isRedeemEvent(item.type)) {
      throw new Error("not a RedeemEvent type");
    }

    return RedeemEvent.reified().new({
      typename: decodeFromFieldsWithTypes(
        TypeName.reified(),
        item.fields.typename,
      ),
      lstAmountIn: decodeFromFieldsWithTypes("u64", item.fields.lst_amount_in),
      suiAmountOut: decodeFromFieldsWithTypes(
        "u64",
        item.fields.sui_amount_out,
      ),
      feeAmount: decodeFromFieldsWithTypes("u64", item.fields.fee_amount),
    });
  }

  static fromBcs(data: Uint8Array): RedeemEvent {
    return RedeemEvent.fromFields(RedeemEvent.bcs.parse(data));
  }

  toJSONField() {
    return {
      typename: this.typename.toJSONField(),
      lstAmountIn: this.lstAmountIn.toString(),
      suiAmountOut: this.suiAmountOut.toString(),
      feeAmount: this.feeAmount.toString(),
    };
  }

  toJSON() {
    return {
      $typeName: this.$typeName,
      $typeArgs: this.$typeArgs,
      ...this.toJSONField(),
    };
  }

  static fromJSONField(field: any): RedeemEvent {
    return RedeemEvent.reified().new({
      typename: decodeFromJSONField(TypeName.reified(), field.typename),
      lstAmountIn: decodeFromJSONField("u64", field.lstAmountIn),
      suiAmountOut: decodeFromJSONField("u64", field.suiAmountOut),
      feeAmount: decodeFromJSONField("u64", field.feeAmount),
    });
  }

  static fromJSON(json: Record<string, any>): RedeemEvent {
    if (json.$typeName !== RedeemEvent.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }

    return RedeemEvent.fromJSONField(json);
  }

  static fromSuiParsedData(content: SuiParsedData): RedeemEvent {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isRedeemEvent(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a RedeemEvent object`,
      );
    }
    return RedeemEvent.fromFieldsWithTypes(content);
  }

  static fromSuiObjectData(data: SuiObjectData): RedeemEvent {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isRedeemEvent(data.bcs.type)) {
        throw new Error(`object at is not a RedeemEvent object`);
      }

      return RedeemEvent.fromBcs(fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return RedeemEvent.fromSuiParsedData(data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch(client: SuiClient, id: string): Promise<RedeemEvent> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(
        `error fetching RedeemEvent object at id ${id}: ${res.error.code}`,
      );
    }
    if (
      res.data?.bcs?.dataType !== "moveObject" ||
      !isRedeemEvent(res.data.bcs.type)
    ) {
      throw new Error(`object at id ${id} is not a RedeemEvent object`);
    }

    return RedeemEvent.fromSuiObjectData(res.data);
  }
}
