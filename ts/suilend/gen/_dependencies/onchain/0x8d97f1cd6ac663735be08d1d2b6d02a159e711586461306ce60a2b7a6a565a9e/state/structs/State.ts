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
} from "../../../../../_framework/reified.js";
import {
  FieldsWithTypes,
  composeSuiType,
  compressSuiType,
} from "../../../../../_framework/util.js";
import { UID } from "../../../0x2/object/structs/index.js";
import { UpgradeCap } from "../../../0x2/package/structs/index.js";
import { ConsumedVAAs } from "../../../0x5306f64e312b581766351c07af79c72fcb1cd25147157fdc2f8ad76de9a3fb6a/consumed-vaas/structs/index.js";
import { PKG_V1 } from "../../constants.js";
import { DataSource } from "../../data-source/structs/index.js";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64, fromHex, toHex } from "@mysten/sui/utils";

export function isState(type: string): boolean {
  type = compressSuiType(type);
  return type === `${PKG_V1}::state::State`;
}

export interface StateFields {
  id: ToField<UID>;
  governanceDataSource: ToField<DataSource>;
  stalePriceThreshold: ToField<"u64">;
  baseUpdateFee: ToField<"u64">;
  feeRecipientAddress: ToField<"address">;
  lastExecutedGovernanceSequence: ToField<"u64">;
  consumedVaas: ToField<ConsumedVAAs>;
  upgradeCap: ToField<UpgradeCap>;
}

export type StateReified = Reified<State, StateFields>;

/**
 * Move struct: `State`
 * Module: `8d97f1cd6ac663735be08d1d2b6d02a159e711586461306ce60a2b7a6a565a9e::state`
 */
export class State implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V1}::state::State`;
  static readonly $numTypeParams = 0;
  static readonly $isPhantom = [] as const;

  readonly $typeName = State.$typeName;
  readonly $fullTypeName: `${typeof PKG_V1}::state::State`;
  readonly $typeArgs: [];
  readonly $isPhantom = State.$isPhantom;

  readonly id: ToField<UID>;
  readonly governanceDataSource: ToField<DataSource>;
  readonly stalePriceThreshold: ToField<"u64">;
  readonly baseUpdateFee: ToField<"u64">;
  readonly feeRecipientAddress: ToField<"address">;
  readonly lastExecutedGovernanceSequence: ToField<"u64">;
  readonly consumedVaas: ToField<ConsumedVAAs>;
  readonly upgradeCap: ToField<UpgradeCap>;

  private constructor(typeArgs: [], fields: StateFields) {
    this.$fullTypeName = composeSuiType(
      State.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V1}::state::State`;
    this.$typeArgs = typeArgs;

    this.id = fields.id;
    this.governanceDataSource = fields.governanceDataSource;
    this.stalePriceThreshold = fields.stalePriceThreshold;
    this.baseUpdateFee = fields.baseUpdateFee;
    this.feeRecipientAddress = fields.feeRecipientAddress;
    this.lastExecutedGovernanceSequence = fields.lastExecutedGovernanceSequence;
    this.consumedVaas = fields.consumedVaas;
    this.upgradeCap = fields.upgradeCap;
  }

  static reified(): StateReified {
    return {
      typeName: State.$typeName,
      fullTypeName: composeSuiType(State.$typeName, ...[]) as `${typeof PKG_V1}::state::State`,
      typeArgs: [] as [],
      isPhantom: State.$isPhantom,
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) => State.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) => State.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => State.fromBcs(data),
      bcs: State.bcs,
      fromJSONField: (field: any) => State.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => State.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) => State.fromSuiParsedData(content),
      fromSuiObjectData: (content: SuiObjectData) => State.fromSuiObjectData(content),
      fetch: async (client: SuiClient, id: string) => State.fetch(client, id),
      new: (fields: StateFields) => {
        return new State([], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return State.reified();
  }

  static phantom(): PhantomReified<ToTypeStr<State>> {
    return phantom(State.reified());
  }
  static get p() {
    return State.phantom();
  }

  static get bcs() {
    return bcs.struct("State", {
      id: UID.bcs,
      governance_data_source: DataSource.bcs,
      stale_price_threshold: bcs.u64(),
      base_update_fee: bcs.u64(),
      fee_recipient_address: bcs.bytes(32).transform({
        input: (val: string) => fromHex(val),
        output: (val: Uint8Array) => toHex(val),
      }),
      last_executed_governance_sequence: bcs.u64(),
      consumed_vaas: ConsumedVAAs.bcs,
      upgrade_cap: UpgradeCap.bcs,
    });
  }

  static fromFields(fields: Record<string, any>): State {
    return State.reified().new({
      id: decodeFromFields(UID.reified(), fields.id),
      governanceDataSource: decodeFromFields(DataSource.reified(), fields.governance_data_source),
      stalePriceThreshold: decodeFromFields("u64", fields.stale_price_threshold),
      baseUpdateFee: decodeFromFields("u64", fields.base_update_fee),
      feeRecipientAddress: decodeFromFields("address", fields.fee_recipient_address),
      lastExecutedGovernanceSequence: decodeFromFields(
        "u64",
        fields.last_executed_governance_sequence,
      ),
      consumedVaas: decodeFromFields(ConsumedVAAs.reified(), fields.consumed_vaas),
      upgradeCap: decodeFromFields(UpgradeCap.reified(), fields.upgrade_cap),
    });
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): State {
    if (!isState(item.type)) {
      throw new Error("not a State type");
    }

    return State.reified().new({
      id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id),
      governanceDataSource: decodeFromFieldsWithTypes(
        DataSource.reified(),
        item.fields.governance_data_source,
      ),
      stalePriceThreshold: decodeFromFieldsWithTypes("u64", item.fields.stale_price_threshold),
      baseUpdateFee: decodeFromFieldsWithTypes("u64", item.fields.base_update_fee),
      feeRecipientAddress: decodeFromFieldsWithTypes("address", item.fields.fee_recipient_address),
      lastExecutedGovernanceSequence: decodeFromFieldsWithTypes(
        "u64",
        item.fields.last_executed_governance_sequence,
      ),
      consumedVaas: decodeFromFieldsWithTypes(ConsumedVAAs.reified(), item.fields.consumed_vaas),
      upgradeCap: decodeFromFieldsWithTypes(UpgradeCap.reified(), item.fields.upgrade_cap),
    });
  }

  static fromBcs(data: Uint8Array): State {
    return State.fromFields(State.bcs.parse(data));
  }

  toJSONField() {
    return {
      id: this.id,
      governanceDataSource: this.governanceDataSource.toJSONField(),
      stalePriceThreshold: this.stalePriceThreshold.toString(),
      baseUpdateFee: this.baseUpdateFee.toString(),
      feeRecipientAddress: this.feeRecipientAddress,
      lastExecutedGovernanceSequence: this.lastExecutedGovernanceSequence.toString(),
      consumedVaas: this.consumedVaas.toJSONField(),
      upgradeCap: this.upgradeCap.toJSONField(),
    };
  }

  toJSON() {
    return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
  }

  static fromJSONField(field: any): State {
    return State.reified().new({
      id: decodeFromJSONField(UID.reified(), field.id),
      governanceDataSource: decodeFromJSONField(DataSource.reified(), field.governanceDataSource),
      stalePriceThreshold: decodeFromJSONField("u64", field.stalePriceThreshold),
      baseUpdateFee: decodeFromJSONField("u64", field.baseUpdateFee),
      feeRecipientAddress: decodeFromJSONField("address", field.feeRecipientAddress),
      lastExecutedGovernanceSequence: decodeFromJSONField(
        "u64",
        field.lastExecutedGovernanceSequence,
      ),
      consumedVaas: decodeFromJSONField(ConsumedVAAs.reified(), field.consumedVaas),
      upgradeCap: decodeFromJSONField(UpgradeCap.reified(), field.upgradeCap),
    });
  }

  static fromJSON(json: Record<string, any>): State {
    if (json.$typeName !== State.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }

    return State.fromJSONField(json);
  }

  static fromSuiParsedData(content: SuiParsedData): State {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isState(content.type)) {
      throw new Error(`object at ${(content.fields as any).id} is not a State object`);
    }
    return State.fromFieldsWithTypes(content);
  }

  static fromSuiObjectData(data: SuiObjectData): State {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isState(data.bcs.type)) {
        throw new Error(`object at ${data.objectId} is not a State object`);
      }

      return State.fromBcs(fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return State.fromSuiParsedData(data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch(client: SuiClient, id: string): Promise<State> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(`error fetching State object at id ${id}: ${res.error.code}`);
    }
    if (res.data?.bcs?.dataType !== "moveObject" || !isState(res.data.bcs.type)) {
      throw new Error(`object at id ${id} is not a State object`);
    }

    return State.fromSuiObjectData(res.data);
  }
}
