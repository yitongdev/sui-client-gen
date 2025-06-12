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
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64 } from "@mysten/sui/utils";

export function isMintEvent(type: string): boolean {
  type = compressSuiType(type);
  return type === `${PKG_V1}::liquid_staking::MintEvent`;
}

export interface MintEventFields {
  typename: ToField<TypeName>;
  suiAmountIn: ToField<"u64">;
  lstAmountOut: ToField<"u64">;
  feeAmount: ToField<"u64">;
}

export type MintEventReified = Reified<MintEvent, MintEventFields>;

/**
 * Move struct: `MintEvent`
 * Module: `b0575765166030556a6eafd3b1b970eba8183ff748860680245b9edd41c716e7::liquid_staking`
 */
export class MintEvent implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V1}::liquid_staking::MintEvent`;
  static readonly $numTypeParams = 0;
  static readonly $isPhantom = [] as const;

  readonly $typeName = MintEvent.$typeName;
  readonly $fullTypeName: `${typeof PKG_V1}::liquid_staking::MintEvent`;
  readonly $typeArgs: [];
  readonly $isPhantom = MintEvent.$isPhantom;

  readonly typename: ToField<TypeName>;
  readonly suiAmountIn: ToField<"u64">;
  readonly lstAmountOut: ToField<"u64">;
  readonly feeAmount: ToField<"u64">;

  private constructor(typeArgs: [], fields: MintEventFields) {
    this.$fullTypeName = composeSuiType(
      MintEvent.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V1}::liquid_staking::MintEvent`;
    this.$typeArgs = typeArgs;

    this.typename = fields.typename;
    this.suiAmountIn = fields.suiAmountIn;
    this.lstAmountOut = fields.lstAmountOut;
    this.feeAmount = fields.feeAmount;
  }

  static reified(): MintEventReified {
    return {
      typeName: MintEvent.$typeName,
      fullTypeName: composeSuiType(
        MintEvent.$typeName,
        ...[],
      ) as `${typeof PKG_V1}::liquid_staking::MintEvent`,
      typeArgs: [] as [],
      isPhantom: MintEvent.$isPhantom,
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) => MintEvent.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) => MintEvent.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => MintEvent.fromBcs(data),
      bcs: MintEvent.bcs,
      fromJSONField: (field: any) => MintEvent.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => MintEvent.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) => MintEvent.fromSuiParsedData(content),
      fromSuiObjectData: (content: SuiObjectData) => MintEvent.fromSuiObjectData(content),
      fetch: async (client: SuiClient, id: string) => MintEvent.fetch(client, id),
      new: (fields: MintEventFields) => {
        return new MintEvent([], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return MintEvent.reified();
  }

  static phantom(): PhantomReified<ToTypeStr<MintEvent>> {
    return phantom(MintEvent.reified());
  }
  static get p() {
    return MintEvent.phantom();
  }

  static get bcs() {
    return bcs.struct("MintEvent", {
      typename: TypeName.bcs,
      sui_amount_in: bcs.u64(),
      lst_amount_out: bcs.u64(),
      fee_amount: bcs.u64(),
    });
  }

  static fromFields(fields: Record<string, any>): MintEvent {
    return MintEvent.reified().new({
      typename: decodeFromFields(TypeName.reified(), fields.typename),
      suiAmountIn: decodeFromFields("u64", fields.sui_amount_in),
      lstAmountOut: decodeFromFields("u64", fields.lst_amount_out),
      feeAmount: decodeFromFields("u64", fields.fee_amount),
    });
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): MintEvent {
    if (!isMintEvent(item.type)) {
      throw new Error("not a MintEvent type");
    }

    return MintEvent.reified().new({
      typename: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.typename),
      suiAmountIn: decodeFromFieldsWithTypes("u64", item.fields.sui_amount_in),
      lstAmountOut: decodeFromFieldsWithTypes("u64", item.fields.lst_amount_out),
      feeAmount: decodeFromFieldsWithTypes("u64", item.fields.fee_amount),
    });
  }

  static fromBcs(data: Uint8Array): MintEvent {
    return MintEvent.fromFields(MintEvent.bcs.parse(data));
  }

  toJSONField() {
    return {
      typename: this.typename.toJSONField(),
      suiAmountIn: this.suiAmountIn.toString(),
      lstAmountOut: this.lstAmountOut.toString(),
      feeAmount: this.feeAmount.toString(),
    };
  }

  toJSON() {
    return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
  }

  static fromJSONField(field: any): MintEvent {
    return MintEvent.reified().new({
      typename: decodeFromJSONField(TypeName.reified(), field.typename),
      suiAmountIn: decodeFromJSONField("u64", field.suiAmountIn),
      lstAmountOut: decodeFromJSONField("u64", field.lstAmountOut),
      feeAmount: decodeFromJSONField("u64", field.feeAmount),
    });
  }

  static fromJSON(json: Record<string, any>): MintEvent {
    if (json.$typeName !== MintEvent.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }

    return MintEvent.fromJSONField(json);
  }

  static fromSuiParsedData(content: SuiParsedData): MintEvent {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isMintEvent(content.type)) {
      throw new Error(`object at ${(content.fields as any).id} is not a MintEvent object`);
    }
    return MintEvent.fromFieldsWithTypes(content);
  }

  static fromSuiObjectData(data: SuiObjectData): MintEvent {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isMintEvent(data.bcs.type)) {
        throw new Error(`object at ${data.objectId} is not a MintEvent object`);
      }

      return MintEvent.fromBcs(fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return MintEvent.fromSuiParsedData(data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch(client: SuiClient, id: string): Promise<MintEvent> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(`error fetching MintEvent object at id ${id}: ${res.error.code}`);
    }
    if (res.data?.bcs?.dataType !== "moveObject" || !isMintEvent(res.data.bcs.type)) {
      throw new Error(`object at id ${id} is not a MintEvent object`);
    }

    return MintEvent.fromSuiObjectData(res.data);
  }
}
