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

export function isEpochChangedEvent(type: string): boolean {
  type = compressSuiType(type);
  return type === `${PKG_V1}::liquid_staking::EpochChangedEvent`;
}

export interface EpochChangedEventFields {
  typename: ToField<TypeName>;
  oldSuiSupply: ToField<"u64">;
  newSuiSupply: ToField<"u64">;
  lstSupply: ToField<"u64">;
  spreadFee: ToField<"u64">;
}

export type EpochChangedEventReified = Reified<EpochChangedEvent, EpochChangedEventFields>;

/**
 * Move struct: `EpochChangedEvent`
 * Module: `b0575765166030556a6eafd3b1b970eba8183ff748860680245b9edd41c716e7::liquid_staking`
 */
export class EpochChangedEvent implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V1}::liquid_staking::EpochChangedEvent`;
  static readonly $numTypeParams = 0;
  static readonly $isPhantom = [] as const;

  readonly $typeName = EpochChangedEvent.$typeName;
  readonly $fullTypeName: `${typeof PKG_V1}::liquid_staking::EpochChangedEvent`;
  readonly $typeArgs: [];
  readonly $isPhantom = EpochChangedEvent.$isPhantom;

  readonly typename: ToField<TypeName>;
  readonly oldSuiSupply: ToField<"u64">;
  readonly newSuiSupply: ToField<"u64">;
  readonly lstSupply: ToField<"u64">;
  readonly spreadFee: ToField<"u64">;

  private constructor(typeArgs: [], fields: EpochChangedEventFields) {
    this.$fullTypeName = composeSuiType(
      EpochChangedEvent.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V1}::liquid_staking::EpochChangedEvent`;
    this.$typeArgs = typeArgs;

    this.typename = fields.typename;
    this.oldSuiSupply = fields.oldSuiSupply;
    this.newSuiSupply = fields.newSuiSupply;
    this.lstSupply = fields.lstSupply;
    this.spreadFee = fields.spreadFee;
  }

  static reified(): EpochChangedEventReified {
    return {
      typeName: EpochChangedEvent.$typeName,
      fullTypeName: composeSuiType(
        EpochChangedEvent.$typeName,
        ...[],
      ) as `${typeof PKG_V1}::liquid_staking::EpochChangedEvent`,
      typeArgs: [] as [],
      isPhantom: EpochChangedEvent.$isPhantom,
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) => EpochChangedEvent.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) => EpochChangedEvent.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => EpochChangedEvent.fromBcs(data),
      bcs: EpochChangedEvent.bcs,
      fromJSONField: (field: any) => EpochChangedEvent.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => EpochChangedEvent.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) => EpochChangedEvent.fromSuiParsedData(content),
      fromSuiObjectData: (content: SuiObjectData) => EpochChangedEvent.fromSuiObjectData(content),
      fetch: async (client: SuiClient, id: string) => EpochChangedEvent.fetch(client, id),
      new: (fields: EpochChangedEventFields) => {
        return new EpochChangedEvent([], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return EpochChangedEvent.reified();
  }

  static phantom(): PhantomReified<ToTypeStr<EpochChangedEvent>> {
    return phantom(EpochChangedEvent.reified());
  }
  static get p() {
    return EpochChangedEvent.phantom();
  }

  static get bcs() {
    return bcs.struct("EpochChangedEvent", {
      typename: TypeName.bcs,
      old_sui_supply: bcs.u64(),
      new_sui_supply: bcs.u64(),
      lst_supply: bcs.u64(),
      spread_fee: bcs.u64(),
    });
  }

  static fromFields(fields: Record<string, any>): EpochChangedEvent {
    return EpochChangedEvent.reified().new({
      typename: decodeFromFields(TypeName.reified(), fields.typename),
      oldSuiSupply: decodeFromFields("u64", fields.old_sui_supply),
      newSuiSupply: decodeFromFields("u64", fields.new_sui_supply),
      lstSupply: decodeFromFields("u64", fields.lst_supply),
      spreadFee: decodeFromFields("u64", fields.spread_fee),
    });
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): EpochChangedEvent {
    if (!isEpochChangedEvent(item.type)) {
      throw new Error("not a EpochChangedEvent type");
    }

    return EpochChangedEvent.reified().new({
      typename: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.typename),
      oldSuiSupply: decodeFromFieldsWithTypes("u64", item.fields.old_sui_supply),
      newSuiSupply: decodeFromFieldsWithTypes("u64", item.fields.new_sui_supply),
      lstSupply: decodeFromFieldsWithTypes("u64", item.fields.lst_supply),
      spreadFee: decodeFromFieldsWithTypes("u64", item.fields.spread_fee),
    });
  }

  static fromBcs(data: Uint8Array): EpochChangedEvent {
    return EpochChangedEvent.fromFields(EpochChangedEvent.bcs.parse(data));
  }

  toJSONField() {
    return {
      typename: this.typename.toJSONField(),
      oldSuiSupply: this.oldSuiSupply.toString(),
      newSuiSupply: this.newSuiSupply.toString(),
      lstSupply: this.lstSupply.toString(),
      spreadFee: this.spreadFee.toString(),
    };
  }

  toJSON() {
    return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
  }

  static fromJSONField(field: any): EpochChangedEvent {
    return EpochChangedEvent.reified().new({
      typename: decodeFromJSONField(TypeName.reified(), field.typename),
      oldSuiSupply: decodeFromJSONField("u64", field.oldSuiSupply),
      newSuiSupply: decodeFromJSONField("u64", field.newSuiSupply),
      lstSupply: decodeFromJSONField("u64", field.lstSupply),
      spreadFee: decodeFromJSONField("u64", field.spreadFee),
    });
  }

  static fromJSON(json: Record<string, any>): EpochChangedEvent {
    if (json.$typeName !== EpochChangedEvent.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }

    return EpochChangedEvent.fromJSONField(json);
  }

  static fromSuiParsedData(content: SuiParsedData): EpochChangedEvent {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isEpochChangedEvent(content.type)) {
      throw new Error(`object at ${(content.fields as any).id} is not a EpochChangedEvent object`);
    }
    return EpochChangedEvent.fromFieldsWithTypes(content);
  }

  static fromSuiObjectData(data: SuiObjectData): EpochChangedEvent {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isEpochChangedEvent(data.bcs.type)) {
        throw new Error(`object at ${data.objectId} is not a EpochChangedEvent object`);
      }

      return EpochChangedEvent.fromBcs(fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return EpochChangedEvent.fromSuiParsedData(data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch(client: SuiClient, id: string): Promise<EpochChangedEvent> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(`error fetching EpochChangedEvent object at id ${id}: ${res.error.code}`);
    }
    if (res.data?.bcs?.dataType !== "moveObject" || !isEpochChangedEvent(res.data.bcs.type)) {
      throw new Error(`object at id ${id} is not a EpochChangedEvent object`);
    }

    return EpochChangedEvent.fromSuiObjectData(res.data);
  }
}
